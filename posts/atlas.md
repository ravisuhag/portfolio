---
title: "ATLAS: Gojek’s real-time geospatial visualization platform"
date: "Feb 19, 2018"
---

At Gojek, location is built into the fabric of all our products, powering dozens of products that are used by millions of customers and drivers.
As a result, we have billions of locations points flowing through our data pipelines in real time. This data drives decisions like driver allocation, surge pricing, driver incentives, and many more.

Gojek’s Data Platform team built Atlas to make it easy for teams to visually explore this flood of geospatial data. Atlas is our geo-visualization platform for exploring and visualizing location data sets at scale. It enables

- City Ops teams with near real-time information on the current supply and demand distribution.
- Data Science team with rich exploratory interfaces to tackle multidimensional data for experimental analysis.

![Atlas](/img/atlas_home.png)

## Architecture

![Atlas](/img/atlas_arch.png)

It is made possible by several internal products and tools we’ve developed over the last 18 months.

- Billions of raw data points representing active driver and customer locations are ingested in real-time into a pipeline built on top of Kafka.
- Raw events data is aggregated by Dagger, our real-time streaming aggregation and analytics platform powered by Flink.
- Datlantis is a user-friendly interface to a fully automated system that creates and deploys custom streaming aggregation on top of Dagger. This allows us to create and deploy massive, production-grade real-time data aggregation pipelines in minutes using a SQL-like syntax. The results are written to a time-series database.
- Enigma is a metrics query engine to access time-series data with powerful functions to aggregate, filter, and analyze.
- Cosmos is the configuration service that holds mappings of Atlas visualization layers and Dagger metrics. More on this later.

## Metric streaming

Data flow from Enigma to Atlas clients uses a combination of HTTP long polling and web sockets to improve performance and reduce load.

The frequency of HTTP long polling between Enigma and cosmos is decided by the Dagger metric aggregation window. This makes data on Atlas as real-time as your aggregated metric.

![Atlas](/img/atlas_metric.png)

Cosmos tracks the metric census, subscribers, and channels for all the clients. The client can subscribe to any number of metrics which are then served by cosmos to Atlas via web socket streaming.

## Dimension mapping

The Cosmos sub-system of Atlas makes for a great deal of flexibility in rendering location data. It provides an interface to define metrics models and layers. This lets users map data into the structure required by the visualization layer of Atlas.

The metric model holds all information related to the data metric. e.g. supported data types, filters, aggregations windows. For each Dagger created through Datlantis, there is one associated metric model in Cosmos.

A layer schema holds information about the visualization layer and its dimensions — e.g. color and height.

Dimensions of a layer are the visual variables that can hold and visualize supported metrics. Each dimension can support one or more metrics. E.g. on a 3D choropleth, color and height are the two dimensions that can be used to display data.

![Atlas](/img/atlas_schema.png)

This structure enables anyone to

- Augment their visualization layers tailored for a specific use case.
- Create and publish dagger metrics dynamically to Atlas for everyone to consume.
- Allow other teams to host their own Atlas instance for focused use cases.

## Data experience

**Layer selection:**

Pick your visualization layers as per your use case. Build heatmaps, data clusters, 2D/3D choropleths, and more.

![Atlas](/img/atlas_2.png)

**Metric selection:**

Flexible mapping of dimensions and data metrics allow exploratory analysis to seamlessly integrate into each team’s data analytics needs.

**Cell Panel:**

Atlas also allows you to explore detailed data of layer’s cell. e.g. number stats, histogram. Each layer can interface with the cell panel and provide detailed information about the cells (e.g. S2 Id).

![Atlas](/img/atlas_panel.png)

**Area Navigation:**

You can smoothly pan across different service areas all across Indonesia.

**Map Style:**

Atlas allows you to quickly switch between map themes without a need for remapping dimensions or data reload. Each map theme is designed to focus on certain properties like roads, area boundaries, etc.

![Atlas](/img/atlas_map.png)

Our tech stack for Atlas consists of a few open-source libraries including React, MapboxGL, and deck.gl. Our data pipeline uses Kafka, Flink, and some other big-data frameworks. Other microservices are written mainly using Clojure, Go, Ruby, and (more rarely) NodeJs.
