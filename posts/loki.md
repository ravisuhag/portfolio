---
title: "Loki: Chaos engineering tool for data infrastructure at Gojek"
date: "Apr 2, 2018"
---

We need to build a resilient and scalable data infrastructure when the daily lives of millions of people depend on us. It means designing systems that can sustain operations in the face of failure.

Built on the principles of Chaos Engineering and tailored to our specific use cases, Loki is our internal disaster simulation and load testing tool. It helps ensure our data infrastructure can tolerate random instance failures. Exposing engineers to failures frequently incentivizes them to build these resilient services.

## Key features:

- **Disaster simulation:** Loki can randomly terminate virtual machine instances, containers, and cluster nodes that run inside our production/performance environment.
- **Load testing:** It can launch multiple instances of data feeders and consumers at desired load state on any of our data streams.
- **Network testing:** It can simulate network connectivity issues.
- **Reports:** At the end of a simulation, Loki can prepare a disaster recovery playbook and reports. These playbooks act as the foundation of our auto-healing service, Thor.
- **CLI interface:** It also has an easy-to-use command-line interface for running and monitoring any experiment.

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

## Architecture

Following is the high-level architecture diagram of Loki.

![](/img/loki_Arch.png)

- **Resources:** Resources are the data infrastructure components on which Loki can operate.
- **Simulation store:** Every disaster simulation experiment is represented as a JSON schema. The simulation store holds information about all simulations ever run.
- **Simulation Agent:** The simulation agent takes care of parsing simulation schemas and running specified operations on resources.
- **Reports:** As the simulation agent runs, the reporter takes care of monitoring system state, experiment timings, and reporting. It helps us provide detail on data loss, recovery recommendations, etc.

## Process

We replicate our production infrastructure to a performance infrastructure that is used to run all experiments.

These experiments typically consist of four steps:

1. First, define the system’s “steady state” — based on measurable output like overall throughput, error rates, latency, etc.
2. Second, hypothesize about the steady-state behavior of an experimental group as compared to a stable control group.
3. Third, expose the experimental group to simulate real-world events such as server crashes, malformed responses, or traffic spikes.
4. The last step is to test the hypothesis by comparing the steady-state of the control group and the experimental group. The smaller the differences, the more confidence we have that the system is resilient.

To explain the process, we will cover one of the case study experiments we ran on our mainstream data cluster using Loki.

### Environment setup

Our mainstream data cluster is six brokers, five zookeeper nodes, multi-zone Kafka cluster. The first step is to replicate the infrastructure state, identify the running load and equivalent simulation load for the cluster. We use Odin, an internal tool built on top of Terraform and Ansible for infrastructure automation to set up the environment.

**Example of sample steady-state:**

- Full ISR, No leader skew, No broker skew
- Produce time < 20ms
- Combined consumers lags < 1k
- No data loss

### Simulation scenarios

Once the performance environment is up and configured with Loki, creating a simulation schema using the Loki CLI tool is next. Following is an example simulation.

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

To test the resiliency of our stream cluster, we run chaos with different failure combinations. As an example

- Broker failure and recovery with same broker id - with and without data disk loss.
- Broker failure and recovery with different broker id - with and without data disk loss.
- Brokers failure ranging from 10% of the cluster to 80%.
- Downtime simulation from 10m to 90m.
- 50 simulated consumers with different consumption and offset rates
- 100 feeders with 10K RPM
- Mirror workers with batch size= 10 and linger.ms = 1

Each simulation schema has its unique id used by the Loki run command to launch the experiment.

### Monitoring

Loki monitors the state of the system over time during the experiment. In addition, it continuously monitors the deviation from steady-state and recovery time once the system recovers from downtime.

![](/img/loki_met.png)

### Experiment report metadata

For data streams, reports include detailed information like

- Amount of time taken to reach stable state — full ISR, no leader skew, no broker skew
- Kafka produce time
- Consumer lag and status
- Producer state
- Failure point for each subsystem in isolation
- Any data loss
- Detailed metrics dashboard

### Conclusion

We started Loki to load-test new data infrastructure components and build confidence in our infrastructure. At the moment, we run Loki on new infra and performance replica. But soon enough, we will also use Loki to run chaos engineering on production infrastructure as well - this gives us the confidence to move quickly in a complex system. You can read more about our Data Infrastructure here.
