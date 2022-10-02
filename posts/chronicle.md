---
title: "Building technical documentation as a product at scale"
date: "Jul 5, 2018"
---

The Data Engineering team is responsible for crafting reliable data infrastructure across Gojek’s 18+ products. We aim to provide disproportionately large advantages to Gojek over competitors by making data available, accessible, reliable, and actionable at scale. In addition, the Data platform allows teams to develop innovative solutions on top of our products, creating new opportunities for our customers and expanding what’s possible.

## Why do you need an internal product website?

In the real world, when we buy a product, it comes with a quick guide or some other form of documents that helps you get going with the product. Without these documents, we’ll have to learn how to use the product leveraging solely on the trial and error method — which is not a pleasant user experience.

We support and build data products for more than 15 internal teams. Our target audience includes product managers, developers, operation managers, and business analysts. Hence:

- We faced problems communicating what the Data team is working on and what is next in our product lineup.
- It was getting harder to make clear that something was missing in their life, and that is our product/service.
- We found ourselves handling support requests daily, consuming a lot of our core development time.
- Worst of all, for developers, data engineering became equivalent to Firehose (data consumption toolkit). For business analysts, we were the Dagger team (data aggregation toolkit); for OMS teams, we were the fronting team. (data publishing toolkit) and so on.

At this point, we had an intensive wiki, but it did not suit our needs anymore. We needed a better solution that reflects our products well and delivers clear communication on how to get started and deep dive without needing a Data Engineering team.

## Process

We are a team of full-stack human beings and believe at our core that a developer’s job is not just writing code. We own the entire product cycle and are equally responsible for sales and adoption as our product manager. Which means we took it into our own hands to design the whole product website. We know the product best, so no one else can communicate it better than us.

### Research and Planning

With Chronicle, the goal was to get people started with our products and deep dive when they are comfortable, without any support from the Data Engineering team. To understand what to expect from Chronicle, we started by talking to teams about how they approach and use products, preparing flows around targeted audiences, and categorizing our products accordingly.

#### Content

Almost every product has some kind of documentation — it might just be a warning or brief usage instructions. But for more complex products, there has to be a solid user guide that requires constant update and maintenance.

Which usually demands a dedicated documentation team constantly working with developers. Despite having more than ten internal data products, we wanted to make technical documentation as much part of our daily work as writing code.

Everyone is responsible for clearly articulating and documenting the use case for every feature we release. Our documentation follows the same CI/CD pipeline as our products.

### Design

We designed Chronicle to provide a fantastic user experience while adding efficiency to internal processes through adequate documentation and reusable components.

We have defined components for system architecture design, narrative design, and print materials. Components can then be reused across all our blog posts, documentation and newsletters.

Data engineering design system includes:

UI Kit with 20+ reusable and customizable components for system architecture design

Design Library and templates for the narrative design. e.g., XKCD styles narratives

Brochures and kits for print materials.

### Development

Before deciding to design and develop Chronicle from the ground up, we looked into many tools available. e.g., Docsify, Gitbook. Despite the fact there are many tools out there, none seem to fit our requirements. We needed

A data-driven product website that can pull data from our metadata services and stay updated.

New content should autofill custom-defined layout structures.

Markdown support with the extensibility of including custom HTML-based style wherever needed.

Indexing and product categorization should be driven from markdown content files.

We built Chronicle using Gatsby — React powered static generator, providing an excellent place to start and implement our custom structures and design.

### Delivery

We launched Chronicle, the Data Engineering product wiki, to better understand our platform across the organization and more accessibility to the developer. Chronicle was no less than a product for us, and we went ahead and followed the entire protocol: from printing brochures, user showcases, and personal interactions.

## Adoption

It took us two weeks to bring Chronicle to the teams and has reduced the need for support time by almost 80%.

“Damn, it’s like one of the best documentation I have ever seen” — Renata, Business Intelligence

“Looked at the documents, very well compiled” — Vinay

Our work to make our documentation a thorough, living document will never be over, but feedback like this helps us know we’re on the right track.

## Conclusion

Documentation, when done right, can help people get excited about a product. If you believe in progressive disclosure, you understand that documentation is a part of your product experience.

Chronicle acts as a source of truth for everyone about what Data Engineering offers, giving everyone a shared language and making them partners in the stewardship of our product toolkit.
