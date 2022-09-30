---
title: "Terraforming repeatable and extensible infrastructure"
date: "2018-03-10"
---

From where we started, Gojek has grown to be a community of more than one million drivers with three million+ orders every day in almost no time. To keep supporting this growth, hundreds of microservices run and communicate across multiple data centers to serve the best experience to our customers.

In this post, we’ll talk about our approach of assembling infrastructure as code that simplifies the maintenance of an increasingly complex microservices architecture for our company.

### Motivation

Building infrastructure is, without a doubt, a complex problem evolving over time. Maintainability, scalability, observability, fault-tolerance, and performance are some of the aspects around it that demand improvements over and over again.

One of the reasons it is so complex is the need for high availability. Most of the components are deployed as a cluster with 100s of microservices and 1000s of machines. This constantly growing infrastructure took us to a situation where no one knew what the managed infrastructure looked like, how the running machines were configured, what changes were made, how networks were connected. In a nutshell, we lacked observability in our infrastructure, and when there was a failure in the system, it was hard to tell what could’ve brought the system down.

### Goals

We have been using Terraform for our IAC in bits and pieces for a while now, but it lacked structure and consistency. Different teams had different repositories. Modules were all over the place or inside the project itself. They were complex, and there were lots and lots of bash scripts.

It was very challenging and error-prone to create infrastructure and maintain it manually. We needed to switch from updating our infrastructure manually and embracing Infrastructure As Code.

Infrastructure As code allows you to take advantage of all software development best practices. As a result, you can safely and predictably create, change, and improve infrastructure. Every network, every server, every database, every open network port can be written in code, committed to version control, peer-reviewed, and then updated as often as necessary.

Project Olympus is the Gojek infrastructure engineering team initiative to solve these problems and achieve the mentioned goals.

**Declarative style infrastructure**

You write code that specifies your desired end state, and the IAC tool itself is responsible for figuring out how to achieve that state. With declarative style, the code always represents the latest state of your infrastructure. Thus, at a glance, you can tell what’s currently deployed and configured without worrying about the past state.

**Structure and consistency**

Consistent workflow and code structure for developers to provision resources on any provider, central module registry to publish and discover modules that can be reused to provision the infrastructure of their choice.

**Self-serve and On-demand infrastructure**

A self-service model to allow developers to pick the infrastructure best suited to run their application and provision it on-demand in a predictable and consistent way.

**Safety and security**

Limiting the effects of IAC-Infrastructure As Code operations to a specific environment/component for security, safety, and avoiding human errors.

**Observability**
With many moving pieces and large-scale infrastructure comes a vital need of allowing both ops teams and service owners to maintain observability of running applications and critical infrastructure.

### Architecture

Olympus Architecture
Module Registry
Modules in Terraform are self-contained packages of Terraform configurations used to create reusable components. Currently, we have more than 30 core base modules and a few abstracted modules built using composition on top of base modules. E.g. glcoud-kubernetes-foundation The module comprises four base modules that set up monitoring, deployment, and other core Kubernetes services.

Terraform allows you to load private modules directly from git version control. The URLs for Git repositories support the ref query parameters; Terraform can use that to check out any branch, tag, or commit. Using ref, it becomes effortless to lock the version of modules in your IAC project.

We host our modules on the Gitlab group, which is a central hub for all Terraform modules. The Infrastructure Engineering team maintains all base modules. Having a central module registry also allows us to enforce governance, compliance, and security against the modules made available to teams.

### Address allocation

GANA- Gojek Assigned Numbers Authority is responsible for coordinating the address allocation to resources like VPC, gateways, clusters, etc. GANA is our internal HTTP rest service with a custom-written terraform provider.

- GANA provides a Terraform resource gana_allocate_subnet to allow allocating a subnet range for any resource type.

- GANA also provides a Terraform data object for other projects to access subnet ranges of already allocated resources.

GANA allows us to

- Prevent IP ranges from clashing across different data centers and cloud projects.

- Provides a central place for accessing allocated resource information for use across different projects.

### Code structure

Structuring the code in Terraform is crucial because it determines which files Terraform has access to when it is executing.

Olympus represents the entire Gojek live cloud infrastructure as IAC. Therefore, each repository in the Olympus GitLab group represents one cloud project owned by their respective teams.

Having each project as a separate repository allows us to

Version control each project infrastructure separately. Which, in turn, enables us to version physical infrastructure. The following example goviet-staging -1.2.3 maps to systems-1.2.3.

Infrastructure mapping enables us to roll back to older versions and always have working state mapping of the last stable infrastructure.

The code structure within each project is layered where each layer represents one section of infrastructure and is a combination of similar components.

**Blast radius**

Terraform can “feel scary” since it’s easy to destroy infrastructure with only one command, making state management very important. One fundamental rule is to use remote state/remote backends. Terraform stores the state of the infrastructure in a JSON File. It is recommended to store that file on an external backend like Amazon S3 or Google cloud storage bucket.

We utilize our Terraform code structure to control the blast radius for our IAC. State. To limit the scope of terraform destroy, our approach breaks down the state into “smaller” components, such as using different states for different projects, environments, and components.

**Manager**

The manager provides scaffolding as a foundation to jump-start your development. Users can run commands to scaffold entire projects or valuable parts. We use Proctor as our IAC scaffold tool.

### Summary

Olympus allowed us to cut provisioning new infrastructure time from weeks to minutes. By breaking it down into modules, managing our infrastructure resources allowed operations and infra teams to be more efficient and organized, thus providing more business value. It helped us implement Infrastructure As Code in Gojek less risky and less complex for adoption.

Olympus helped us set up the foundational organizational shift to say, “Here’s a wiki to tell you how to provision it yourself. Don’t file a ticket, don’t wait for the Infra engineering team”.
