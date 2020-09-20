FROM adoptopenjdk:11-jre-hotspot
RUN useradd -ms /bin/sh newuser
USER newuser
WORKDIR /home/newuser
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]