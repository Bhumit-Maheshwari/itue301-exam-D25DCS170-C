# Library Book Management System

A digitized management system for college library books, members, and borrowing records.

---

## 1. Required Environment Variables
The application requires database credentials configured in a `.env` file inside the `backend/` directory.

Create `backend/.env` and configure:
```text
MONGO_URI=mongodb://127.0.0.1:27017/libraryDB
```
*(Refer to `.env.example` at the repository root for reference).*

---

## 2. MongoDB Setup
1. Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community).
2. Ensure the MongoDB service is running on your machine on the default port `27017`.
3. *(Optional)* Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass) to view database collections.

---

## 3. Backend Setup and Run Instructions
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the required Node.js dependencies:
   ```bash
   npm install
   ```
3. Run the backend server:
   ```bash
   npm start
   ```
   *The server starts and runs on [http://localhost:5000](http://localhost:5000)*

---

## 4. Frontend Setup and Run Instructions
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React/Vite development server:
   ```bash
   npm run dev
   ```
   *The React application opens on [http://localhost:5173](http://localhost:5173)*
