# School Management System - Node.js APIs

This project provides a set of Node.js APIs for managing school data. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location using the MySQL database.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
  - [Add School API](#add-school-api)
  - [List Schools API](#list-schools-api)
- [Hosting & Deployment](#hosting--deployment)
- [Postman Collection](#postman-collection)
- [Testing](#testing)

## Features
- Add new schools with name, address, latitude, and longitude.
- List schools sorted by proximity to the user’s location based on latitude and longitude.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the APIs.
- **MySQL**: Relational database for storing school data.

## Database Setup
Create a MySQL table called `schools` with the following structure:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```

## API Endpoints

### 1. Add School API
- **Endpoint**: `/api/v1/schools/addSchool`
- **Method**: `POST`
- **Payload**: 
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.3456,
    "longitude": 78.9101
  }
  ```
- **Functionality**: Validates the input data and adds a new school to the `schools` table.
- **Validation**: 
  - Name, address, latitude, and longitude must not be empty.
  - Latitude and longitude must be valid float values.
  - 

### 2. List Schools API
- **Endpoint**: `/api/v1/schools/listSchools`
- **Method**: `GET`
- **Parameters**: `latitude` and `longitude`
- **Functionality**: Fetches all schools from the database, sorts them by proximity to the provided user coordinates, and returns the sorted list.


## Hosting & Deployment
The APIs are hosted on [Hosting Service Name] and can be accessed at:
- **Base URL**: [API URL]

## Postman Collection
A Postman collection has been created for testing the APIs. It includes sample requests and expected responses.
- [Download Postman Collection](#)

## Testing
You can test the APIs using [Postman](https://www.postman.com/) or with the `axios` examples as shown in the API endpoints section.
