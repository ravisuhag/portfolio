---
title: "Data infrastructure at Gojek"
date: "Mar 12, 2018"
---

Supporting millions of daily interactions across Gojek’s ecosystem requires a highly resilient and scalable data infrastructure. Our Data Platform team is tasked with building this foundation, ensuring reliable data infrastructure for Gojek’s 18+ products. As we scale, we’ve developed a robust data platform designed to handle exponential growth, automate processes, and operate with a product mindset.

**Scale:** Gojek’s data doesn’t grow linearly but exponentially as new products and features generate increasing amounts of data. Currently, our platform processes over 6 billion events daily.

**Automation:** Operating at such a scale requires extensive automation, from deployment to infrastructure management, enabling rapid feature rollouts while maintaining production stability.

**Product mindset:** The Data Platform team operates as an internal B2B SaaS entity, measuring success by metrics like adoption, retention, and cost savings. Our users—Product Managers, Developers, Data Scientists, and Analysts—rely on our infrastructure for insights and decision-making.

## Overview

Our data infrastructure supports seamless publishing and consumption of both raw and aggregated data. With real-time processing at its core, this platform powers essential use cases like AI-driven allocations, fraud detection, recommendations, and real-time reporting. Here’s a high-level breakdown of the architecture and components that drive our data infrastructure.

![](/img/infra.png)

### Data Ingestion

We handle diverse data sources, each feeding into our system via stream producers:

**Source Instrumentation:** Events are instrumented directly from source code and ingested through a stream producer library, with language support for Clojure, Java, Ruby, and Go.

**Stats Collection:** Machine daemons on compute instances collect logs, API statistics, and metrics sent over UDP or TCP.

**Schema Evolution:** Stream producers empower teams to evolve data schemas without breaking downstream dependencies, ensuring flexibility and scalability.

### Event Streams

Data flows into Kafka-based, multi-region, rack-aware clusters for durability and high availability.

- Fronting streams push data to central data streams. Data streams are highly reliable multi-region, rack-aware Kafka clusters.
- We have more than 10 different data streams. Each handles more than a billion points each day. e.g. Locstream- Driver Location stream, Logstream- API Log stream, Tagstream- Segmentation stream, etc.
- A Mirror stream is the mirror of its corresponding data stream with high data retention, purposed for data aggregation and data replays.
- Performance stream is an exact copy of the data stream for chaos engineering and load testing purposes.

### Data Consumption

Firehose is our service for consuming raw and aggregated data, supporting multiple sink modes (HTTP, InfluxDB, PostgreSQL, etc.), and deployable on both VMs and Kubernetes clusters. Firehose abstracts data access, allowing consumers to ingest data seamlessly without managing backend infrastructure.

### Data Storage

Long-term data retention is managed through Secor clusters, which pull data from Kafka and persist it to cloud storage in Parquet format. For interactive analytics, we leverage Zeppelin notebooks, which query data from Apache Spark clusters on top of cold storage.

### Data Aggregation

Our real-time data aggregation layer is powered by Dagger, built on Apache Flink. Each team operates dedicated Dagger clusters, allowing isolation and scalability while handling high data replication volumes. For rapid pipeline creation, Datlantis provides an interface to define and deploy custom aggregations on top of Dagger using a SQL-like syntax, with results stored in a time-series database.

### Data Visualization

Our data visualization tools enable insights that drive decision-making across Gojek:

- **Enigma:** A query engine for time-series data, supporting powerful aggregation, filtering, and analysis functions.
- **Cosmos:** A configuration service that manages visualization layer mappings and Dagger metrics for Atlas.
- **Atlas:** Our geo-visualization platform for real-time location data, enabling teams to explore and analyze location data at scale.

### Infrastructure automation

Infrastructure automation is key to scaling and maintaining Gojek’s data platform. Odin, built on Terraform and Ansible/Chef, enables infrastructure as code, allowing us to safely create, change, and improve infrastructure. Odin automates the provisioning of clusters, data replication across data centers, and infrastructure management, reducing provisioning times by 99%.

### Chaos engineering

Resilience testing is critical in our infrastructure strategy. Loki, our internal chaos engineering tool, conducts disaster simulations by terminating instances and containers, pushing systems to their limits to identify failure points and ensure recoverability. It also supports load testing by launching feeders and consumers on-demand, providing robust infrastructure testing capabilities.

### Infrastructure Monitoring

Real-time monitoring is vital to maintain service uptime and performance. We use the TICK stack, Datadog, and PagerDuty for alerting and visualization. Additionally, we are developing Heimdall, an internal data tracing service that aggregates and visualizes data events across the platform, helping us monitor data pipeline health daily.

## Conclusion

Gojek’s data infrastructure is designed to be robust, resilient, and flexible, supporting the real-time demands of a fast-paced, data-driven organization. Through automation, chaos engineering, and a product-focused mindset, our Data Platform team empowers the company to innovate and scale reliably.

Our infrastructure will continue to evolve as we refine and expand our systems to meet new challenges, ensuring that data remains a core driver of Gojek’s growth and success.
