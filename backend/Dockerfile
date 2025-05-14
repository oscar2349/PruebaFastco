FROM openjdk:17-jdk-slim
WORKDIR /app
COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B
COPY src src
RUN ./mvnw package -DskipTests -B
EXPOSE 8080
CMD ["java","-jar","target/notes-backend-0.0.1-SNAPSHOT.jar"]