# Microservices skeleton with nestJS and RabbitMQ message broker

This is a skeleton of a nestJS microservices architecture using RabbitMQ as message broker. The system consists of two resource services and API gateway.

## Quick start

Create file `.env` and copy the contents of `.env.example` in it. Then, run `docker-compose up` to start the services.

## Using the API

The API gateway on `http://localhost:3000/` connects to two resource services, namely `service-a` (in port 3001) and `service-b` (in port 3002). Instructions on how to use the api below.

### Service a

Send a POST request to `http://localhost:3000/items` with the body

```
{
  "name": "item 1"
}
```

You should get the stored item back as a response.

You can view the stored items by sending a GET request to `http://localhost:3000/items/<id>`.

### Service b

Send a POST request to `http://localhost:3000/bars` with the body

```
{
  "name": "bar 1"
}
```

You should get the stored bar object back as a response.

You can get the saved "bar" objects by sending a GET request to `http://localhost:3000/bars/<id>`.
