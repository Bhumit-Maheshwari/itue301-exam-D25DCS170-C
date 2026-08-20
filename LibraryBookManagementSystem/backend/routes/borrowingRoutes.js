const express = require("express");
const router = express.Router();

// In-memory borrowings array
const borrowings = [];

// GET /api/v1/borrowings — Return all borrowings
router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: borrowings });
});

// POST /api/v1/borrowings — Create a new borrowing
router.post("/", (req, res) => {
    const { memberId, bookId, borrowDate, returnDate, status } = req.body;

    const newBorrowing = {
        id: borrowings.length + 1,
        memberId,
        bookId,
        borrowDate,
        returnDate,
        status: status || "borrowed"
    };

    borrowings.push(newBorrowing);
    res.status(201).json({ success: true, data: newBorrowing });
});

module.exports = router;
