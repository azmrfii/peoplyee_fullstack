
# Peoplyee

This is a full-stack job board application built with a Next.js frontend and a Node.js (Express) backend.

## Project Structure

- `frontend/`: The Next.js application.
- `backend/`: The Node.js (Express) API.
- `docker-compose.yml`: Defines the PostgreSQL database service.

## Setup Instructions

### Backend

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file by copying the example file.
    ```bash
    cp .env.example .env
    ```
    The default `DATABASE_URL` should work with the provided Docker setup.

4.  **Start the database:**
    Make sure you have Docker installed and running. Then, from the root of the project, run:
    ```bash
    docker-compose up -d
    ```
    This will start a PostgreSQL database instance.

5.  **Apply database migrations:**
    This will create the necessary tables in the database based on the schema.
    ```bash
    npx prisma migrate dev
    ```

6.  **Seed the database (Optional):**
    This will populate the database with initial job data.
    ```bash
    npx prisma db seed
    ```

### Frontend

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## How to Run the Project

### Backend

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The backend server will be running on `http://localhost:3001` (as per standard Express template, assuming not changed).

### Frontend

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The frontend application will be accessible at `http://localhost:3000`.

## Assumptions and Design Decisions

### Backend

*   **Database:** A PostgreSQL database is used for data storage, managed via a Docker container for ease of setup and consistency across environments.
*   **ORM:** Prisma is used as the Object-Relational Mapper to interact with the database. It provides a type-safe database client and simplifies database migrations.
*   **API Framework:** The REST API is built using Express.js, a minimal and flexible Node.js web application framework.
*   **Development Server:** `tsx` is used to run the TypeScript-based server in development, which provides hot-reloading on file changes.
*   **Environment Variables:** The database connection string is managed through a `.env` file. A `.env.example` file is provided as a template. For local development, you should create your own `.env` file by copying the example.

### Frontend

*   **Framework:** The frontend is built with Next.js, a React framework that enables features like server-side rendering and static site generation.
*   **Data Fetching & State Management:** `@tanstack/react-query` is used for fetching, caching, and managing server state. It helps to keep the UI in sync with the data from the backend.
*   **HTTP Client:** `axios` is used for making HTTP requests from the frontend to the backend API.
*   **Styling:** Tailwind CSS is used for styling, as indicated by the presence of `tailwindcss` and a PostCSS configuration.
