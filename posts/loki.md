---
title: "Loki: Chaos engineering tool for data infrastructure at Gojek"
date: "Apr 2, 2018"
---

When millions depend on Gojek’s platform daily, resilient and scalable data infrastructure is essential. Loki, our internal chaos engineering tool, was developed to build confidence in our infrastructure by simulating failure scenarios and stress-testing the system. Designed for disaster simulation and load testing, Loki exposes Gojek’s data infrastructure to random failures and performance challenges, pushing it to its limits to ensure reliability.

## Core Capabilities

Loki is built on principles of chaos engineering, with features tailored for our unique infrastructure needs:

#### Disaster Simulation

Loki can randomly terminate VMs, containers, and nodes within our production or performance environments, testing resilience in real-world scenarios.

#### Load Testing

The tool launches multiple instances of data feeders and consumers to apply desired loads across data streams.

#### Network Testing

Loki simulates network disruptions to ensure services can withstand connectivity issues.

#### Automated Reports

After each simulation, Loki generates recovery playbooks and detailed reports, serving as the foundation for our auto-healing services.

#### CLI Interface

An intuitive CLI allows engineers to set up, run, and monitor experiments seamlessly.

```sh
Usage:
  loki [command]

Available Commands:
  simulate      Run a simulation
  new           Create a new simulation
  list          List resources, simulations and deployments

Flags:
  -h, --help   help for a command

Use "loki [command] --help" for more information about a command.
```

A typical Loki command structure allows engineers to quickly set up experiments, define failure points, and monitor outcomes.

## Architecture

![](/img/loki_Arch.png)

Loki’s architecture was designed to streamline chaos testing across our extensive data infrastructure. Here’s an overview of its core components:

#### Resources

Infrastructure components that Loki can target, such as brokers, clusters, and network resources.

#### Simulation Store

A repository that stores simulation experiments as JSON schemas, allowing traceability and reusability.

#### Simulation Agent

This component parses simulation schemas, executing predefined operations on specified resources.

#### Reporting Engine

The reporting engine tracks experiment progress and collects metrics on system performance, recovery times, and failure points.

## Process flow

Loki’s process replicates production infrastructure to a performance environment where it conducts controlled experiments. A typical simulation involves four steps:

1. **Define the “Steady State”:** Establish baseline metrics like throughput, error rates, and latency.
2. **Hypothesize Behavior:** Predict steady-state behavior in the experimental group compared to a stable control group.
3. **Simulate Failures:** Introduce real-world disruptions, such as server crashes, malformed responses, and traffic spikes.
4. **Analyze and Compare:** Assess the difference between the experimental and control groups, validating resilience and identifying areas for improvement.

## Case Study: Simulating Failure on Gojek’s Mainstream Data Cluster

One experiment involved testing resilience in Gojek’s primary data cluster, a multi-zone Kafka setup with six brokers and five Zookeeper nodes. We used Odin, an internal tool built on Terraform and Ansible, to replicate the production environment.

#### Sample Steady-State Metrics:

- **Full ISR:** All in-sync replicas.
- **No Leader or Broker Skew:** Balanced load across brokers.
- **Produce Time:** <20ms.
- **Consumer Lag:** <1k.
- **Data Loss:** None.

#### Simulation scenarios

Using the Loki CLI, we defined the following simulation schema:

```json
{
    "name" : "esb-kafka-mirror-resilency-test-phase-3",
    "description": "Resilency test for ESB kafka mirror",
    "cluster": "mainstream-perf",
    "producers": [],
    "choas": [
        {
            "name" : "CASE 1",
            "blast_radius": "mainstream-perf",
            "type": "kafka",
            "failure_percentage": "10%",
            "data_disk_failure":"true",
            "instance_recovery": "true",
            "downtime":"20m"
        }
    ]
    "consumers": [
        {
            "name" : "ride_consumer",
            "topic": "ride-booking-log",
            "offset": "latest",
            "count": "5",
            "consumer_per_group":"2",
            "schema": "com.gojek.booking.Message",
        }
    ],
    "feeders":[
        {
            "name": "test",
            "topic": "test",
            "count" : "2"
        }
    ]
}
```

Loki conducted multiple failure scenarios, such as:

- **Broker Failures:** Tests with 10%-80% broker failures, with and without data loss.
- **Downtime Simulations:** Varied from 10 to 90 minutes.
- **Load Testing:** Simulated 50 consumers at different consumption rates and offsets, plus 100 feeders at 10K RPM.
- **Mirror Worker Variations:** Batch size set to 10, linger.ms set to 1.

Each experiment’s unique ID allows engineers to execute, monitor, and assess each test independently.

#### Monitoring and Reporting

![](/img/loki_met.png)

Throughout each simulation, Loki tracks deviations from the steady state, recovery times, and system behavior. Reporting includes key data points like:

- **Time to Stabilize:** Full ISR, no leader or broker skew.
- **Producer Metrics:** Kafka produce time and throughput.
- **Consumer Lag:** Detailed lag analysis per consumer.
- **Failure Points:** Identification of data loss and vulnerable subsystems.
- **Comprehensive Metrics Dashboard:** Provides a centralized view of experiment outcomes.

## Impact and Future Plans

Since launching Loki, we’ve been able to rigorously test new data infrastructure components and gain confidence in the resilience of our systems. Currently, we use Loki on performance replicas, but our goal is to expand it to run chaos experiments in production environments, ensuring that we can deploy features confidently in complex, dynamic systems.

Loki has become a cornerstone of Gojek’s infrastructure strategy, aligning engineering teams with best practices in resilience and proactive infrastructure management. By integrating chaos engineering directly into our workflow, Loki enables us to design systems that meet the demands of Gojek’s users every day.
