FROM adoptopenjdk/openjdk11:alpine-jre
ENV BACKEND_DB backenddb
ENV BACKEND_PASSWORD postgres
ENV BACKEND_USERNAME postgres
ADD target/backend-0.0.1.jar backend-0.0.1.jar
ENTRYPOINT ["java", "-jar", "backend-0.0.1.jar"]

