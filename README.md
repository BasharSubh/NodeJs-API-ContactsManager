# Contact Management System

This is a Contact Management System API built with Node.js and Express.js. It provides endpoints to manage user accounts and contacts. The API uses JSON Web Tokens (JWT) for authentication and MongoDB for data storage.

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
