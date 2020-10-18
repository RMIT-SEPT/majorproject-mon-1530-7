.PHONY: run-prod run-dev test build help
.DEFAULT_GOAL := help

run-prod:  ## Run app via production Docker container
	docker-compose -f docker-compose.prod.yml up --build --remove-orphans

run-dev:  ## Run app via developmont Docker container
	docker-compose -f docker-compose.yml up --build --remove-orphans

test: export REACT_APP_API_URL = http://localhost:8080/api/
test:  ## Run tests
	npm test

build:  ## Build app
	npm build

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'