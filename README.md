# Consumer App

## Overview

- The Consumer App is a standalone application designed to consume messages from a Kafka topic and store them in a PostgreSQL database. 
- This application is meant to be deployed to a Kubernetes cluster by integrating it into an Infra Helm chart. 
- The application is containerized for seamless deployment and includes a CI/CD pipeline managed by Jenkins for efficient and automated container builds.


## Prerequisites

Before using the Consumer App, ensure the following prerequisites are met:

- **Docker**:  Utilized for building and pushing container images to a repository.
- **Kubernetes Cluster**: Access to a Kubernetes cluster where the application will be deployed.
- **Kafka**: Access to a Kafka broker and topic for consuming health check results.
- **PostgreSQL**: A running PostgreSQL database instance for storing health check results.
- **Configuration**: Kafka and PostgreSQL connection details should be provided externally, utilizing Secrets and ConfigMap when running in a Kubernetes cluster.

## Configuration

Configure the application using the following environment variables:

- `KAFKA_BROKER`: Kafka broker address.
- `KAFKA_TOPIC`: Kafka topic name for consuming health check results.
- `POSTGRES_HOST`: PostgreSQL host address.
- `POSTGRES_PORT`: PostgreSQL port.
- `POSTGRES_DATABASE`: PostgreSQL database name.
- `POSTGRES_USER`: PostgreSQL username.
- `POSTGRES_PASSWORD`: PostgreSQL password.


Author: Naga Vaishnavi Puppala