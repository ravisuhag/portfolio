---
title: "Asgard: A case study to envision data infrastructure automation at Gojek"
date: "Apr 30, 2018"
---

Given that our internal services generate billions of events a day, our data infrastructure must be highly scalable, available, and flexible enough to keep up with rapid product iteration and exponential data growth. Unfortunately, it results in spending a substantial portion of our time in infrastructure provisioning, load testing, and system recovery. This article describes how we envisioned Asgard, our toolbox for automating end-to-end data infrastructure challenges.

## Product Goal

Every product needs a vision. It can come from many sources, the most crucial being solving existing pain points and fulfilling a real, deeply-felt human need. The goal with product vision is to create an experience that respects users’ time and efforts and makes the product the no-brainer solution.

When setting a product vision, It is always tempting to make a prescriptive goal that is too macro or vague. To avoid it and align efforts towards a common goal, gathering rich information and evidence about the customer and their experience is vital. For us, Asgard has clear goals:

- Reduce the data infrastructure provisioning man-hours to zero.
- Make load testing an integral part of the provisioning.
- Being able to run disaster simulation in an automated controlled environment.
- Build an internal auto-healing playbook/service to empower teams and live in a pager-free world.

## User Personas

A user persona is a character that represents a potential user of your product. It’s a representation of the goals and behavior of a hypothesized group of users. To introduce persona development into your product thinking, frame the problems and opportunities related to the most important people — your users.

- ​John Doe: Data Engineer with privileges for infra provisioning
- ​​John Roe: Product Engineer from internal teams who need data infrastructure
- Richard Roe: Data analysts who consume data through different data products
- Jane Roe: Management stakeholder who wants to ensure systems don’t fail.

## Product Narrative

The power of storytelling has an immense impact on human culture. We are wired to respond to stories, so it makes perfect sense to use narrative to create the emotional, human connection to a product.

The product narrative is the answer to the question of why this product exists. Answer to ‘why’ provides context for the vision of the product. It creates the world in which the vision exists. Following is the early version of the data infrastructure narrative:

![](/img/asgard_home.png)

## Asgard Architecture

This product narrative then translated to five services:

#### Odin— The Infrastructure orchestrator

Odin helps to safely and predictably create, change, and improve infrastructure. It allows us to define infrastructure as code to increase operator productivity and transparency.

#### Loki— Infrastructure disaster simulation

Loki is a disaster simulation tool that helps ensure our infrastructure can tolerate random instance failures. Loki randomly terminates compute instances and containers that run inside of a production environment. Exposing engineers to failures more frequently incentivizes them to build resilient services.

#### Thor- Infrastructure auto-healing

Thor is a service for infrastructure auto-healing and workload balancing. Thor can automatically detect broker failure and reassign the workload on the failed nodes to other nodes. Thor can also perform load balancing and make sure broker usage does not exceed the defined settings.

#### Heimdall- Data monitoring

Heimdall is a data monitoring and tracing service. It collects and visualizes the data and events collected by data engineering infrastructure. Heimdall builds reporting dashboards for monitoring the state of data collection in Gojek daily.

#### Bifrost- Infrastructure access

Bifrost allows internal teams to request data infrastructure without the intervention of a data team. It also allows users to take a closer look at data services dedicated to the concerned teams.

In the coming posts, I will be discussing each service in much more detail.

## How it turned out and where we’re going next

Odin has helped us reduce provisioning time by 99% despite an increasing number of requests. We can now load test and run disaster simulation with Loki on our performance infrastructure with complete confidence. In addition, we can run recipes on Thor to replay old data to prevent any data loss.

At the time of writing this post, We’re working on the model to allow these services to communicate and coordinate their actions with each other.

Leading a product from conception to completion is no easy task with prioritizing features, organizing requirements, creating and maintaining product roadmaps. Over the last few years, product narrative has proved to be an effective technique for designing interfaces and UI/UX flows. At the same time, it is not common to use this approach for envisioning complex, distributed technology architecture and service interactions. But we believe that personas and narratives are helpful for every product. This approach has helped us shape our data engineering products for the better.
