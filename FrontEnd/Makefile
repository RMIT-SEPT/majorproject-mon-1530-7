.PHONY: run-prod run-dev test build

.default: all

all:

run-prod:
	docker-compose -f docker-compose.dev.yml up --build --remove-orphans

run-dev:
	docker-compose -f docker-compose.yml up --build --remove-orphans

test:
	npm test

build:
	npm build