FROM adoptopenjdk/openjdk11:alpine-jre
ENV BACKEND_DB backenddb
ENV BACKEND_PASSWORD postgres
ENV BACKEND_USERNAME postgres
ADD target/backend-1.0.0.jar backend-1.0.0.jar
ENTRYPOINT ["java", "-jar", "backend-1.0.0.jar"]
