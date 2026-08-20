const express = require("express");
const router = express.Router();

// In-memory books array
const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering", isbn: "978-0132350884", available: true },
    { id: 2, title: "The Pragmatic Programmer", author: "David Thomas", category: "Software Engineering", isbn: "978-0135957059", available: true },
    { id: 3, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", isbn: "978-0262033848", available: false },
    { id: 4, title: "Design Patterns", author: "Erich Gamma", category: "Software Engineering", isbn: "978-0201633610", available: true },
    { id: 5, title: "Database System Concepts", author: "Abraham Silberschatz", category: "Database", isbn: "978-0078022159", available: false },
    { id: 6, title: "Computer Networking", author: "James Kurose", category: "Networking", isbn: "978-0133594140", available: true },
];

// GET /api/v1/books — Return all books
router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: books });
});

module.exports = router;
