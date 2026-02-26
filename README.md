# Premier League Player Statistics Platform

A full-stack web app that collects and serves Premier League player statistics through a REST API and React frontend.

## Overview

This project covers the full pipeline:

- Scraping player data from fbref.com  
- Storing structured data in PostgreSQL  
- Exposing data through a Spring Boot REST API  
- Displaying results in a React (Vite) frontend  

Users can search players by name, position, or team.

## Tech Stack

**Backend**
- Java
- Spring Boot
- PostgreSQL
- JPA 

**Frontend**
- React
- Vite

**Data**
- Web scraping
- CSV processing

## API Examples

- `/players?name=...`
- `/players?position=...`
- `/players?team=...`

## What This Project Focuses On

- REST API design
- Relational database modeling
- Backend–frontend integration
- Query filtering and data handling

## Notes

Player data sourced from fbref.com for educational purposes.
