---
title: "Terraforming repeatable and extensible infrastructure"
date: "Oct 3, 3018"
---

As Gojek expanded to over a million drivers and three million+ daily orders, our infrastructure requirements scaled rapidly. With hundreds of microservices running across multiple data centers, maintaining a seamless experience required a flexible, efficient infrastructure capable of handling exponential growth. This post outlines our journey in building Olympus, an infrastructure-as-code (IAC) platform that automated and simplified Gojek’s complex infrastructure needs.

![Olympus](/img/olympus.png)

## Motivation

Infrastructure at scale presents challenges that go far beyond mere configuration. High availability, observability, fault tolerance, and security all come into play—and they demand careful orchestration. As the infrastructure grew, so did the complexity:

#### Lack of visibility

We reached a point where no single person knew the entire infrastructure landscape. Identifying configuration details, recent changes, or the impact of failures became increasingly difficult.

#### Scaling and speed

With operations spanning 4 countries, 20+ products, and millions of transactions, our team needed infrastructure that could expand quickly and without bottlenecks.

#### On-demand access

Traditional ticket-based provisioning wasn’t practical at this scale. We needed an automated, self-serve model to keep up with the speed of development.

Olympus was designed to tackle these issues head-on, bringing efficiency, consistency, and independence to Gojek’s infrastructure management.

## Vision

From the outset, we envisioned Olympus as a platform that would make infrastructure provisioning as seamless as possible. We established four primary goals:

#### Declarative infrastructure

Engineers should be able to define the desired end state of the infrastructure, while Olympus figures out the details. By using a declarative style, we ensured that the code always reflected the current state, providing an up-to-date view of what’s deployed.

#### Structure and consistency

Olympus provided a centralized registry of reusable modules, streamlining resource provisioning. With a consistent structure, teams could find what they needed, reducing duplication and minimizing errors.

#### Self-Serve access

We wanted engineers to be able to deploy their infrastructure on demand. This self-serve model was crucial for enabling fast-paced development and eliminating bottlenecks.

#### Safety and security

Fine-grained control allowed us to enforce data governance and prevent unauthorized access. Security was integral to Olympus, ensuring that teams could work quickly without compromising protection.

## Architecture

Here’s a closer look at how Olympus brought these goals to life, with some of its most impactful components:

![Olympus](/img/olympus_arch.png)

#### Module Registry

Modules in Terraform act as reusable infrastructure “building blocks.” Olympus introduced a central registry of modules hosted on GitLab, with over 30 core modules maintained by our Infrastructure Engineering team. This registry allowed us to enforce best practices, security, and governance across the organization.

```hcl
 module "kafka" {
  source = "<path>/terraform/gcloud-kafka?ref=v1.0.1"
}

module "flink" {
  source = "<path>/terraform/gcloud-kubernetes-flink?ref=v1.1.1"
  cluster_name = "${var.cluster_name}"
  teams        = "${var.teams}"
}

module "kubernetes" {
  source = "<path>/terraform/gcloud-kubernetes?ref=v1.0"
  project_name     = "${var.project_name}"
  cluster_name     = "${var.cluster_name}"
  nginx_ingress_ip = "${module.kubernetes_base.nginx_ingress_ip}"
}
```

Terraform allows you to load private modules directly from git version control. The URLs for Git repositories support the ref query parameters. Terraform can use that to check out any branch, tag, or commit. Using ref, it becomes effortless to lock the version of modules in your IAC project.

```hcl
module "godata_core_vpc" {
  source        = "<path>/terraform/gcloud-vpc.git?ref=v2.0.0"
  project_name  = "${var.project_name}"
  vpc_name      = "${var.landscape_name}"
  subnet_region = "${var.subnet_region}"
  gana_endpoint = "${var.gana_endpoint}"
}
```

These modules could be version-controlled and shared across teams, ensuring that everyone had access to reliable, tested components.

#### Infrastructure provisioner

We developed Proctor as Olympus’s infrastructure scaffold tool, providing teams with on-demand access to infrastructure templates. With simple commands, engineers could generate Terraform code to deploy anything from Kafka clusters to network infrastructure.

```sh
Usage:
  proctor provision [command]

Available Commands:
  app-kminion      Generate terraform code for deploying kminion for application side kafka
  governance       Generate terraform modules for governance
  kube-foundation  Generate terraform code for kube foundation
  kubernetes       Generate terraform modules for kubernetes
  mirrormaker      Generate mirrormaker from entity's landscape VPC to given destination project
  network          Generate terraform modules for network
  ocean-governance Generate terraform modules for Ocean governance resources
  project          Generate terraform modules for project
  radar-router     Generate terraform code for Radar Router
  stream           Generate stream from entity's landscape VPC to given destination project
  tunnel           Generate tunnel from entity's landscape VPC to given destination project

Flags:
  -h, --help   help for provision

Global Flags:
      --output-dir string     Required, specify terraform root folder path
      --template-dir string   Required, specify template folder path

Use "proctor provision [command] --help" for more information about a command.
```

Proctor simplified the setup process, making it easy for teams to initiate infrastructure in minutes instead of days.

#### Network allocation

Gojek Assigned Numbers Authority (GANA) was our internal service for network management, allocating IP ranges to prevent conflicts. By integrating GANA as a Terraform resource, teams could avoid overlapping IPs across projects and data centers—an essential safeguard at Gojek’s scale.

GANA provided a Terraform resource `gana_allocate_subnet` to allow allocating a subnet range for any resource type.

```hcl
// Allocate a subnet to the resource
resource "gana_allocate_subnet" "subnet_allocate" {
  project      = "${var.project_name}"
  category     = "vpc"
  network_name = "${var.subnet_name}"
  endpoint     = "${var.gana_endpoint}"
}

```

GANA also provided a Terraform data object for other projects to access subnet ranges of already allocated resources.

```hcl
// Fetch details of the cluster subnet
data "gana_subnet" "godata_core" {
  project      = "${var.project_name}"
  category     = "vpc"
  network_name = "godata-core"
  endpoint     = "${var.gana_endpoint}"
}
```

#### Metadata provider

To enhance visibility, we built a custom metadata provider, centralizing information on IP addresses, service locations, and resource configurations. This metadata supported service discovery and streamlined infrastructure management across the board.

```hcl
provider "godata" {
  host = "http://xyz.gojek.io"
}

resource "godata_stream" "gmainstream" {
  urn         = "urn"
  name         = "mainstream"
  brokers {
    address = "10.11.12.10"
    name    = "g-godata-box-01"
    host    = "g-godata-box-01"
  }
}
```

#### Code structure

Structuring the code in Terraform is crucial because it determines which files Terraform has access to when it is executing.

Olympus represents the entire Gojek live cloud infrastructure as IAC. Therefore, each repository in the its GitLab group represents one cloud project owned by their respective teams.

Having each project as a separate repository allows us to version control each project infrastructure separately. It also enables us to version physical infrastructure. The following example `goviet-staging -1.2.3` maps to `systems-1.2.3`.

Infrastructure mapping enables us to roll back to older versions and always have working state mapping of the last stable infrastructure. The code structure within each project is layered where each layer represents one section of infrastructure and is a combination of similar components.

## Lessons

Building Olympus was both a technical and strategic challenge. Here are some of the key lessons we gained in managing IAC at scale:

#### Control the blast radius

With Terraform, the potential to make sweeping changes is powerful—and risky. We adopted best practices to limit the “blast radius” of any one command, breaking down infrastructure into smaller components and using remote state to manage updates safely.

#### Avoid deep module nesting

Modules with deep dependencies can quickly become unmanageable. We kept module nesting minimal, enabling simpler versioning and easier maintenance.

#### Consistent naming conventions

Standardized naming conventions became essential as our infrastructure grew. Consistent names allowed us to maintain context across resources and projects, making infrastructure easier to manage. e.g. `p-gojek-id-mainstream-kafka-01`

## Future

Olympus transformed how we managed infrastructure, cutting provisioning time from weeks to minutes and empowering teams with a true self-serve model. This shift marked a cultural transformation at Gojek, moving the company towards a model where engineers could handle their infrastructure needs independently. Teams now have the autonomy to provision resources on demand without relying on ticket-based systems, accelerating development and improving agility.

Looking forward, we’re exploring ways to make Olympus even more responsive, connecting its components to allow for coordinated infrastructure management. This next step will bring us closer to a fully autonomous infrastructure model, where automation and resilience are built into every layer.

## Reflections

Building Olympus taught us that effective infrastructure isn’t just about code; it’s about creating a product that people want to use. By emphasizing reusability, self-service, and security, we built a platform that serves as the backbone of Gojek’s infrastructure—allowing us to scale, iterate, and grow alongside the business. With Olympus, we laid the foundation for a culture of empowerment, agility, and resilience, ensuring that Gojek’s infrastructure could keep pace with its ambitions.

Olympus is more than a toolkit; it’s a way of reimagining how infrastructure can support fast-growing organizations, making the complex manageable and the essential accessible.
