# Employee Management System

A fullstack web application for managing employees, attendance, leave, payroll, tasks, reports, and notifications.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Setup & Installation](#setup--installation)
  - [Frontend](#frontend-setup)
  - [Backend](#backend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Authentication & Authorization](#authentication--authorization)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This project is a comprehensive Employee Management System designed to streamline HR operations such as employee management, attendance tracking, leave management, payroll processing, task assignment, reporting, and notifications. The frontend is built using React.js, while the backend API is powered by Flask.

---

## Tech Stack

- **Frontend:** React.js, Axios, React Router
- **Backend:** Python, Flask, Flask-RESTful
- **Database:** (Add your database, e.g., PostgreSQL, MySQL, SQLite)
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** Email Service, PDF generation, CSV export

---

## Folder Structure

### Frontend

```plaintext
frontend/
├── public/                  # Static files: index.html, favicon.ico
├── src/
│   ├── assets/              # Images, logos, CSS files
│   ├── components/          # Reusable UI components (Navbar, Footer, Loader, etc.)
│   ├── pages/               # React pages mapped to routes (Login, Dashboard, Reports, etc.)
│   ├── services/            # API calls using Axios organized by feature
│   ├── context/             # React Context for global state (Auth, Notifications)
│   ├── App.js               # Main app and routing configuration
│   ├── index.js             # React app entry point
│   └── .env                 # Environment variables (e.g. API base URL)


backend/
├── app.py                   # Flask application entry point
├── config.py                # Configuration for DB, JWT, CORS
├── requirements.txt         # Python dependencies
├── instance/                # Optional local config overrides
├── routes/                  # Flask route definitions for API endpoints
├── controllers/             # Business logic for each route
├── models/                  # ORM models representing database tables
├── utils/                   # Helper utilities (JWT handling, email, PDF generation, etc.)
├── migrations/              # Database migration scripts
└── .env                     # Environment variables (DB credentials, secrets)


