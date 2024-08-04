# React + Express + MongoDB TodoApp

## Prerequisites

- Docker installed on your local machine
- Node.js installed (for local dev environment)

## Installation

1. Clone the repository 
2. Navigate to the root directory of the project
3. Create a `.env` file with the necessary environment variables:
    - **DB_ROOT**: The root username for your database.
    - **DB_PASS**: The password for your database.
    - **DB_NAME**: The name of your database.
    - **BACKEND_PORT**: The port number on which the backend server runs (you should set it to `8000`).
    - **MONGO_DB_HOST**: The host address for your MongoDB instance (only required for local development; for that set it to `localhost`).
4. Run `docker-compose up` to start the services

## Usage 

Access the application in your web browser at http://localhost/.