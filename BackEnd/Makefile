VERSION=0.0.1
DOCKER_HOST=192.168.99.100

.PHONY: run-prod run-dev run test dbconsole

.default: all

all:

target/backend-${VERSION}.jar:
	mvn package

run-prod: target/backend-${VERSION}.jar
	docker-compose up --build --remove-orphans

run-dev run: run-prod

test:
	mvn test

dbconsole: export PGPASSWORD = postgres
dbconsole:
	psql --host=$(DOCKER_HOST) --user postgres -d backenddb