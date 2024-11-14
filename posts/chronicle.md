---
title: "Building technical documentation as a product at scale"
date: "Jul 5, 2018"
---

In a landscape as vast and complex as Gojek’s ecosystem, where 18+ products each demand reliable, scalable data infrastructure, our Data Platform team has one goal: to empower Gojek with a competitive edge. Our mission is clear—make data available, accessible, reliable, and actionable. But as our platform grew, we faced an unexpected challenge. Scaling technology was one thing; communicating our value across the organization was another. That’s where our journey with Chronicle began.

## Why build an internal product website?

Think about any product you buy. It usually comes with a manual—a guide to help you get started without the frustration of trial and error. The same need applied to our data products.

![](/img/chronicle_home.png)

Supporting over 15 internal teams meant we had developers, product managers, operations, and business analysts all engaging with our tools. Yet:

- Communication gaps arose, leaving many teams unclear on our offerings and our roadmap.
- We spent an increasing amount of core development time addressing repetitive support requests.
- Misconceptions abounded: developers associated us solely with Firehose, analysts knew us as the Dagger team, while operations saw us as a publishing tool.

Our once-extensive wiki felt insufficient, and we needed a new approach—a dedicated space that reflected our evolving products, clear onboarding, and a self-sufficient, seamless user experience.

## Process

Our team is full-stack in more than just coding; we own the entire product lifecycle, from development to user adoption. Knowing our products inside-out meant we were the best people to communicate their value. So, we took on the responsibility of designing and building an internal product website ourselves.

#### Research and Planning

With Chronicle, our vision was straightforward: empower teams to start using our data products independently, with the flexibility to deep-dive as they became more comfortable. We began by consulting with teams, mapping out user flows for various roles, and categorizing our products for easier access. Chronicle wasn’t just about documenting; it was about enabling, aligning with our audience’s needs, and removing friction from their experience.

![](/img/chronicle_res.png)

#### Content

Most products have documentation, whether it’s a quick usage tip or a full guide. But for complex products like ours, documentation needs to be comprehensive, frequently updated, and embedded in our workflow. Instead of relying on a separate documentation team, we made documentation as integral as coding. Each feature released comes with clear, actionable documentation, all part of the same CI/CD pipeline we use for development.

#### Design

Designing Chronicle meant more than just aesthetics; it was about crafting a delightful, efficient user experience. We created components for system architecture, narrative flow, and print-ready materials. Our design system, the Data Engineering Design Kit, features 20+ reusable components, templates for storytelling (think XKCD-style narratives), and sleek print brochures—each piece reinforcing the cohesive Chronicle experience.

![](/img/chronicle_des.png)

#### Development

Before building Chronicle from scratch, we explored tools like Docsify and Gitbook. But we needed something more adaptable:

- A dynamic site that could pull from metadata services to stay current.
- Flexible layouts for new content, markdown support, and custom HTML styling.
- A streamlined way to organize and index content driven by markdown.

Gatsby, a React-based static site generator, fit the bill. It allowed us to implement our custom structures and tailor the site to our exact specifications.

#### Delivery

We treated Chronicle like a full-fledged product launch. We printed brochures, showcased it to teams, and held interactive sessions to demonstrate how it could transform workflows. For our team, Chronicle wasn’t just documentation—it was our way of making data engineering more accessible across Gojek.

## Impact

In just two weeks, Chronicle had reduced our support time by nearly 80%. Feedback poured in:

- <i>“Damn, it’s like one of the best documentation I have ever seen.” — Renata, Business Intelligence</i>
- <i>“Looked at the documents, very well compiled.” — Vinay</i>

These responses remind us that documentation done right not only informs but excites. Chronicle has become a living document, continuously refined and expanded, bringing clarity, purpose, and a shared language to Gojek’s data-driven initiatives.

## Conclusion

Documentation is more than just instructions; it’s an extension of the product experience. Chronicle serves as a source of truth for Gojek, empowering every team to partner in our journey. Together, we’re building a culture of knowledge-sharing and stewardship that drives our products forward.
