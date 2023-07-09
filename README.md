# Contact Management System

This is a Contact Management System API built with Node.js and Express.js. It provides endpoints to manage user accounts and contacts. The API uses JSON Web Tokens (JWT) for authentication and MongoDB for data storage.

https://nodejs-api-contactsmaneger-server.onrender.com/

Please note that the provided API endpoint URL are for demonstration purposes only and should not be used for actual production usage. These URLs are meant to show the format and structure of the API endpoints. You should replace them with your own appropriate URLs based on your deployment environment.

## Features

- User registration and authentication
- Create, read, update, and delete contacts
- Token-based authentication using JSON Web Tokens (JWT)
- Error handling middleware
- MongoDB database connection

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)

## API Endpoints
### Users
- POST /api/users/register: Register a new user.
- POST /api/users/login: Log in an existing user.
- GET /api/users/current: Get information about the current user (requires authentication).
### Contacts
- GET /api/contacts: Get all contacts for the current user (requires authentication).
- POST /api/contacts: Create a new contact for the current user (requires authentication).
- GET /api/contacts/:id: Get a specific contact by ID (requires authentication and ownership).
- PUT /api/contacts/:id: Update a specific contact by ID (requires authentication and ownership).
- DELETE /api/contacts/:id: Delete a specific contact by ID (requires authentication and ownership).
## Error Handling
The API uses a custom error handling middleware to handle various types of errors, such as validation errors, not found errors, unauthorized access errors, and server errors. The middleware returns appropriate error responses with detailed error messages.

## Environment variables:

- Create a .env file in the root directory.
- Add the following variables to the .env file:
```
PORT=5000
CONNECTIONS_STRING=<your-database-connection-string>
ACCESS_TOKEN_SECRET=<your-access-token-secret>
```

## Testing the API
You can test the API endpoints using tools like cURL or Postman. Below are some example requests and responses:

### Register a User
#### Request:

```
POST /api/users/register
Content-Type: application/json

{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```
#### Response:
```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "_id": "611f463ff1d32b001c834759",
  "username": "john",
  "email": "john@example.com"
}
```
### Log in a User
#### Request:

```
POST /api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```
#### Response:
```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "accessToken": "<your-access-token>"
}
``` 
### Get All Contacts
#### Request:

```
GET /api/contacts
Authorization: Bearer <your-access-token>
```
#### Response:

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "_id": "611f46b4f1d32b001c83475a",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "1234567890"
  },
  {
    "_id": "611f46c8f1d32b001c83475b",
    "name": "Bob Smith",
    "email": "bob@example.com",
    "phone": "9876543210"
  }
]
```
### Create a New Contact
#### Request:

```
POST /api/contacts
Content-Type: application/json
Authorization: Bearer <your-access-token>

{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "4567891230"
}
```
#### Response:

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "_id": "611f4720f1d32b001c83475c",
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "4567891230"
}
```
Please note that you need to replace <your-access-token> in the requests with the actual access token obtained during the login process.

### Acknowledgements
We would like to thank the open-source community for their contributions and support.

### About
This project is free and open source, released under the MIT License
