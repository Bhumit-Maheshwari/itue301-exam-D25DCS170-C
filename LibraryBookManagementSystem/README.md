# Library Book Management System

A digitized management system for college library books, members, and borrowing records.

## Project Structure
- `LibraryBookManagementSystem/`: React frontend (Vite)
- `LibraryBookManagementSystem/backend/`: Express.js backend (REST API & MongoDB/Mongoose)

---

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally on port `27017` (or MongoDB Atlas connection string)

---

### 2. Backend Setup
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd LibraryBookManagementSystem/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
4. In `.env`, set your connection string:
   ```text
   MONGO_URI=mongodb://127.0.0.1:27017/libraryDB
   ```
5. Start the backend server:
   ```bash
   npm start
   ```
   *The server runs on http://localhost:5000*

---

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend root folder:
   ```bash
   cd LibraryBookManagementSystem
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
   *The web app opens on http://localhost:5173*
