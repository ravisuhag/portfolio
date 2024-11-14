---
title: "ATLAS: Gojek’s real-time geospatial visualization platform"
slug: "atlas-gojek-real-time-geospatial-visualization-platform"
date: "Feb 19, 2018"
---

Location data is the backbone of Gojek’s products, powering everything from driver allocation and surge pricing to city operations and driver incentives. With billions of location points processed daily, the need for real-time, scalable visualization became clear. To meet this demand, the Gojek Data Platform team built Atlas, a geo-visualization platform designed for exploring and visualizing large-scale location datasets in near real-time.

## Empowering teams with geospatial intelligence

Atlas enables several Gojek teams to leverage location data effectively:

- **City Operations:** Gain near real-time insights into supply and demand distribution to optimize operations.
- **Data Science:** Explore multidimensional location data through interactive, customizable visualizations for deep analysis and experimentation.

![Atlas](/img/atlas_home.png)

## Architecture

Atlas is built on a robust, high-throughput data pipeline and integrates multiple internal tools and services for data ingestion, aggregation, storage, and querying. Here’s a breakdown of its architecture:

#### Real-Time Data Ingestion with Kafka

Billions of raw location data points from active drivers and customers are ingested into a Kafka-based real-time pipeline, where events are processed and routed for further analysis.

#### Aggregation via Dagger

Dagger, Gojek’s real-time streaming aggregation platform built on Flink, processes and aggregates these raw events. This layer transforms high-velocity data into actionable metrics, optimized for efficient querying and storage.

#### Datlantis: Streaming Aggregation Interface

Datlantis is a user-friendly interface enabling teams to create and deploy real-time aggregation pipelines on Dagger with a SQL-like syntax. Datlantis allows rapid deployment of production-grade pipelines, storing results in a time-series database and supporting various analytical use cases.

#### Enigma: Metrics Query Engine

Enigma is a powerful query engine for accessing and analyzing time-series data produced by Dagger. It supports advanced functions for data filtering, aggregation, and retrieval, powering data queries across Atlas’s visualizations.

#### Cosmos: Configuration Service

Cosmos manages Atlas’s visualization layers and metric mappings. It holds configurations for Atlas’s visualizations, allowing users to define and customize metrics and data layers dynamically.

![Atlas](/img/atlas_arch.png)

## Data Streaming and Client Interaction

Data flows from Enigma to Atlas clients through HTTP long polling and WebSocket connections for optimized performance and load reduction. Here’s how the data streaming works:

- **Long Polling:** Data is retrieved from Enigma based on Dagger’s metric aggregation window, ensuring that metrics in Atlas are updated nearly in real-time.
- **WebSocket Streaming:** Cosmos serves metrics to Atlas clients through WebSocket streaming, tracking metric subscriptions and channels for each client session.

![Atlas](/img/atlas_metric.png)

## Dimension mapping

The Cosmos subsystem enhances Atlas’s flexibility by allowing users to map and render location data metrics across multiple visualization dimensions (e.g., color, height). It offers a powerful configuration interface where users can define metric models and layer schemas:

#### Metric Models

Each metric model in Cosmos corresponds to a Dagger stream created through Datlantis, holding metadata like supported data types, filter options, and aggregation windows.

#### Layer Schemas

Layer schemas define visualization dimensions for each data layer in Atlas, allowing users to customize color, height, and other visual attributes to suit specific use cases.

![Atlas](/img/atlas_schema.png)

This modular architecture allows teams to:

- Customize visualization layers for specialized insights.
- Publish new metrics dynamically to Atlas, making them accessible to all users.
- Deploy and manage dedicated Atlas instances for focused use cases.

## User Experience

Atlas offers a rich set of visualization options, each tailored to the diverse needs of Gojek’s operational and data science teams:

#### Layer Selection

Users can choose from various visualization types such as heatmaps, data clusters, and 2D/3D choropleths.

![Atlas](/img/atlas_2.png)

#### Metric Selection

Users can map data metrics onto visual dimensions, enabling exploratory analysis aligned with each team’s specific analytics requirements.

#### Cell Panel Analysis

Each layer includes a cell panel for detailed data inspection, offering insights like cell stats and histograms. Cells are represented by S2 IDs for precise geospatial indexing.

![Atlas](/img/atlas_panel.png)

#### Area Navigation

Users can navigate service areas across Indonesia smoothly, with adjustable pan and zoom controls.

#### Map Themes

Atlas allows for seamless theme switching, supporting maps optimized for different features like road networks or area boundaries.

![Atlas](/img/atlas_map.png)

## Tech Stack

The tech stack powering Atlas includes:

- **Front-End:** React, MapboxGL, and Deck.gl for interactive, high-performance geospatial visualizations.
- **Data pipeline:** Kafka for event streaming and Flink for real-time data aggregation.
- **Back-End services:** Primarily developed in Clojure, Go, and Ruby, with some components in Node.js.

Atlas is built to handle the high scale and speed of Gojek’s data infrastructure, transforming billions of location points into a tool for real-time, actionable insights.

## Impact

By delivering Atlas, we enabled Gojek teams to access, explore, and leverage real-time geospatial data independently, with minimal dependence on engineering support. This platform empowers City Operations, Data Science, and Product teams to visualize and analyze location data at scale, supporting faster decision-making and experimentation.

Atlas continues to evolve, with ongoing improvements to enhance performance, scalability, and user experience, making it a foundational tool for geospatial intelligence at Gojek.
