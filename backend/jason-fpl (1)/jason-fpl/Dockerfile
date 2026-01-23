# Stage 1: Build the application using a Maven base image
FROM maven:3.9-eclipse-temurin-21 AS build
#Set Working Directory
WORKDIR /app
#Copy pom.xml and install dependencies
COPY pom.xml .
RUN mvn dependency:go-offline
#Copy source code and build application
COPY src ./src
RUN mvn clean package -DskipTests
#Use official jdk image to run the image
FROM eclipse-temurin:21-jre-jammy
#Set working directory
WORKDIR /app
# Copy the JAR file from the 'build' stage to the current stage
COPY --from=build /app/target/*.jar app.jar
#Expose port 8080
EXPOSE 8080
#Specify command to run
ENTRYPOINT ["java", "-jar", "app.jar"]