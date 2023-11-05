# Brewery Viewer Backend

Brewery Backend is the backend server for the Brewery Search application, which allows users to search for breweries, view their details, and leave reviews. This server is built using Node.js, Express.js, and MongoDB.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Authentication](#authentication)
- [Deployment](#deployment)

## Technologies Used

List the technologies and libraries used in your backend application:

- Node.js
- Express.js
- MongoDB (for database)
- bcrypt (for password hashing)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) 

### Installation

1. Clone this repository: git clone https://github.com/varunc10/brewery_be

2. Install the dependencies:  npm install

### Configuration

Configure your environment variables by creating a .env file in the project root. Here are some example environment variables you may need:

MONGODB_URI=your-mongodb-uri

Ensure you replace the placeholder values with your actual configuration.

## Usage

To start the backend server, run: node server.js


## API Endpoints

POST /register: This endpoint is used for user registration. It allows users to create a new account by providing a username and password. The registration route is typically used to handle user account creation.

POST /login: This endpoint is used for user authentication. It allows registered users to log in by providing their username and password. Upon successful login, users typically receive an authentication token that can be used for subsequent authenticated requests.

GET /brewery: This endpoint is used for searching breweries based on different criteria. It likely supports query parameters, such as searchType and searchTerm, to filter and retrieve brewery information based on user input. The criteria might include attributes like city, name, or brewery type.

GET /brewery/:id: This endpoint is used to retrieve detailed information about a specific brewery. It takes a dynamic parameter :id to specify the brewery's unique identifier and returns information such as the brewery's name, address, contact details, and more.

GET /reviews/:breweryId: This endpoint is used to retrieve reviews for a specific brewery. It takes the breweryId as a parameter, which specifies the brewery for which reviews are requested. The reviews typically include information like the username of the reviewer, their rating, and a description.

POST /reviews/:breweryId: This endpoint is used to add a new review for a specific brewery. It typically expects a request body containing the new review information, including the reviewer's username, rating, and a description. The review is associated with the specified breweryId.


## Database

Used MongoDB as the db. 2 schemas are used, one for users, other for reviews, the reviews has a foreign key of id (maps to brewery_id) to maintain mapping of which review was uploaded to which brewery.


## Authentication

Bcrypt is used for Authentication
    User Registration (/api/register):
        When a user registers, their username and password are received as part of the request body.
        The password is hashed using bcrypt with a salt to securely store it in the database.
        A new user document is created using Mongoose and saved to the MongoDB database.
    User Login (/api/login):
        When a user logs in, their username and password are received as part of the request body.
        The server attempts to find a user with the provided username in the database.
        If the user is found, bcrypt is used to compare the provided password with the hashed password stored in the database. If the passwords match, it indicates a successful login.
        If the login is successful, the server responds with a success message.

## Deployment

Railway was used to deploy this service.
