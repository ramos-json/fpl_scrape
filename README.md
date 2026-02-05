# Premier League Player Statistics Platform

A full-stack data-driven web application that scrapes, stores, and serves Premier League player statistics through a RESTful API and modern React frontend.

---

## 📌 Project Summary

This project demonstrates an end-to-end data pipeline and full-stack system design:
- Web scraping and data ingestion
- Relational database modeling
- REST API development
- Frontend integration with a backend service

The application allows users to query Premier League players by name, position, or team.

---

## 🕷️ Data Collection & Processing

- Scraped player and team data from **fbref.com**
- Collected statistics for all Premier League teams and players
- Transformed and stored raw data in **CSV** format
- Imported structured data into a **PostgreSQL** database

---

## 🗄️ Database Design

- **PostgreSQL** relational database
- Normalized schema for teams and players
- Optimized queries for filtering by:
  - Player name
  - Position
  - Premier League team

---

## 🔧 Backend Architecture

- Built with **Java & Spring Boot**
- RESTful API for accessing player data
- Supports flexible query parameters:
  - `/players?name=...`
  - `/players?position=...`
  - `/players?team=...`
- Implements clean separation of concerns (controller, service, repository layers)
- Connects to PostgreSQL using JPA/JDBC

---

## 🎨 Frontend Application

- Developed using **React** with **Vite**
- Consumes Spring Boot REST API
- Dynamically renders player statistics based on user queries
- Component-based architecture for maintainability

---

## 🛠️ Technologies Used

**Backend**
- Java
- Spring Boot
- PostgreSQL
- JPA / JDBC

**Frontend**
- React
- Vite
- JavaScript

**Data & Tooling**
- Web scraping
- CSV data processing
- REST APIs
- Git & GitHub

---

## 📈 Key Skills Demonstrated

- Full-stack application development
- Web scraping and data ingestion
- REST API design and implementation
- Relational database modeling
- Backend–frontend integration
- Query optimization and filtering logic

---

## 🔮 Future Enhancements

- Advanced filtering and sorting
- Player comparison and analytics
- API pagination and caching
- Containerization with Docker
- Cloud deployment

---

## 📄 Disclaimer

Player statistics sourced from **fbref.com** and used for educational purposes only.
