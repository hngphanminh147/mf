## Description

Backend

## Prerequisite

Postgresql: Create database follow the configuration in `.local.env`

Migrate database:

```bash
yarn migration:run
```

## Start the app in Docker

```bash
docker compose up
```

## Package Installation

```bash
yarn install
```

## Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```
