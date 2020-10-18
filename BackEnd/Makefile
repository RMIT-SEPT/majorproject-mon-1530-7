VERSION=1.0.0
PSQL_SERVER_HOST=192.168.99.100

.PHONY: run-prod run-dev run test dbconsole build help
.DEFAULT_GOAL := help

target/backend-${VERSION}.jar:
	mvn package

run: target/backend-${VERSION}.jar  ## Run app via Docker container
	docker-compose up --build --remove-orphans

run-dev run-prod: run

test:  ## Run tests
	mvn test

dbconsole: export PGPASSWORD = postgres
dbconsole:  ## Open psql console
	psql --host=$(PSQL_SERVER_HOST) --user postgres -d backenddb

build:  ## Build app
	npm build

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'