---
title: 'Asgard: Envisioning data infrastructure automation at Gojek'
date: '2018-04-30'
slug: asgard-a-study-to-envision-data-infrastructure-automation-at-go-jek-35dd6da2c72f
subtitle: >-
  Every product needs a vision. This can come from many sources; most important
  being solving existing pain points and fulfilling a real, deeply-felt human
  need. The goal is to create an experience which respects users’ time, efforts,
  and make product the no-brainer solution.
readingTime: 3
description: >-
  Every product needs a vision. This can come from many sources; most important
  being solving existing pain points and fulfilling a real, deeply-felt human
  need. The goal is to create an experience which respects users’ time, efforts,
  and make product the no-brainer solution.
author: Ravi Suhag
category: engineering
tags:
  - infrastructure
  - data
  - product
  - culture
  - gojek
  - building
draft: false
---

As Gojek scaled, our data infrastructure grew exponentially—handling billions of events daily across a wide range of services. This constant demand meant our platform needed to be not just scalable but highly resilient and flexible. However, we quickly found ourselves spending more time than we’d like on infrastructure provisioning, load testing, and system recovery, time that could be better spent innovating. So, we set out to build Asgard: a toolkit designed to automate these essential processes, freeing our team to focus on the next big thing.

## Defining the product vision

Every impactful product begins with a clear vision, rooted in solving real problems. For Asgard, this vision was to create an infrastructure experience that was powerful yet seamless, respecting the time and effort of everyone who depended on it. We framed our goals in concrete, actionable terms:

- **Zero Manual Provisioning:** Reduce data infrastructure provisioning man-hours to zero.
- **Integrated Load Testing:** Make load testing an automatic part of provisioning.
- **Automated Disaster Simulation:** Create an environment for controlled disaster simulation.
- **Auto-Healing for a Pager-Free World:** Build a system that empowers teams to avoid on-call disruptions through self-healing automation.

Each of these goals addressed specific pain points, pushing us to think strategically about how to structure Asgard for maximum impact.

## Personas: Understanding our users

A critical part of our approach was developing user personas. These personas represented the diverse roles within Gojek who would rely on Asgard, allowing us to design with specific needs and challenges in mind:

- John Doe: A data engineer tasked with infrastructure provisioning.
- John Roe: A product engineer in need of reliable data infrastructure.
- Richard Roe: A data analyst working with various data products.
- Jane Roe: A management stakeholder focused on system reliability.

Each persona guided our decisions, ensuring that Asgard would be intuitive, functional, and scalable for a broad audience.

## Product narrative: Why Asgard exists

With a strong product narrative, we humanized the complex challenges Asgard aimed to address. This narrative became the “why” behind every feature, a guiding story that kept our focus clear. By connecting Asgard’s goals to the people it served, we created a unifying context that aligned our team and clarified our mission: to enable a resilient, efficient, and scalable data infrastructure that liberated teams to work independently.

![](/img/asgard_home.png)

## Architecture: Building blocks of automation

The product narrative helped us break down Asgard into five essential services, each with a distinct role in making our vision a reality:

#### Odin — The infrastructure orchestrator

Odin is Asgard’s infrastructure-as-code solution. It allows us to define and manage infrastructure configurations efficiently, increasing transparency and enabling safe, predictable infrastructure changes.

#### Loki — Disaster simulation tool

Loki simulates controlled failures, exposing infrastructure to random instance terminations in production. By building resilience through regular disaster simulations, Loki helps teams create services that can withstand unexpected disruptions.

#### Thor — Auto-Healing for infrastructure

Thor is Asgard’s auto-healing service, detecting infrastructure failures and rebalancing workloads autonomously. This proactive approach keeps systems stable, reassigning tasks from failed nodes and maintaining optimal performance.

#### Heimdall — Monitoring and visualization

Heimdall provides real-time monitoring and tracing for data infrastructure, building dashboards that track data collection across Gojek. This observability layer allows teams to quickly assess data quality and performance metrics.

#### Bifrost — Infrastructure access gateway

Bifrost enables Gojek teams to request data infrastructure independently, removing the dependency on data engineers. By granting secure access to relevant data services, Bifrost empowers teams to work autonomously.

## Results: From vision to real impact

In the months following Asgard’s implementation, we saw remarkable results. Odin reduced provisioning time by an incredible 99%, despite the increase in requests. Loki allowed us to simulate and handle infrastructure failures confidently, and Thor’s recipes ensured data continuity by replaying old data in cases of disruption.

Currently, we’re working on enabling these services to communicate and coordinate, pushing automation even further.

## Reflections: Product narratives in technical architecture

Leading Asgard from conception to deployment underscored the value of blending strategic thinking with technical execution. Defining user personas and product narratives may be common in UX design, but applying these principles to complex, distributed infrastructure design gave us a clear and human-centered roadmap. It’s a technique that proved invaluable, enabling us to build a toolkit that wasn’t just functional but transformational.

As we look forward, Asgard’s development serves as a reminder of what’s possible when vision and execution come together. By focusing on automation, resilience, and accessibility, we created a foundation that empowers teams across Gojek—giving them the freedom to innovate and scale, knowing that the infrastructure is ready for whatever comes next.
