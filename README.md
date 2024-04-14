# REST-api-with-MongoDB

This project demonstrates the creation of a RESTful API using Express.js and MongoDB for CRUD operations on a user database. It serves as a practical learning tool to explore REST API development and MongoDB interaction.

## Project Overview

This API offers the following functionalities:

- Create new user entries
- Read existing user data
- Update user information
- Delete user records

The project adheres to the Model-View-Controller (MVC) architectural pattern for better organization and maintainability.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your system. You can download them from the official Node.js website: <https://nodejs.org/en>

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/AneeshSrivastava/REST-api-with-MongoDB.git
   ```

2. Navigate to the project directory in your terminal.

   ```bash
   cd REST-api-with-MongoDB
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Usage

To start the server, run:

```bash
npm run start
```

The server will start on <http://localhost:8000> by default. You can use tools like Postman or curl to interact with the APIs.

## Dependencies

- [Express](https://www.npmjs.com/package/express): A minimal and flexible Node.js web application framework.
- [Mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool designed to work in an asynchronous environment.

## Dev Dependencies

- [Nodemon](https://www.npmjs.com/package/nodemon): A utility that monitors for changes in your source code and automatically restarts the server.

## Folder Structure

The project follows a standard MVC architecture:

```graphql
├── controllers # Controllers for handling HTTP requests
├── models # MongoDB schema and models
├── middlewares # Handle log request operations
└── routes # Express route definitions
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or want to suggest improvements.
