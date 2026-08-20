const express = require("express");
const cors = require("cors");
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");
const bookRoutes = require("./routes/bookRoutes");
const borrowingRoutes = require("./routes/borrowingRoutes");

const app = express();
const PORT = 5000;

// Enable CORS for React frontend
app.use(cors());

// Parse JSON body
app.use(express.json());

// Global request logger middleware
app.use(requestLogger);

// Routes
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/borrowings", borrowingRoutes);

// Global error-handling middleware (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
