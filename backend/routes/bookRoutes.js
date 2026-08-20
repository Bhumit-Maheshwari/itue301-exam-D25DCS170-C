const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// GET /api/v1/books — Return all books from MongoDB
router.get("/", async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json({ success: true, data: books });
    } catch (err) {
        next(err);
    }
});

// POST /api/v1/books — Create a new book (demonstrates schema working)
router.post("/", async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ success: true, data: book });
    } catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: Object.values(err.errors).map(e => e.message)
            });
        }
        next(err);
    }
});

module.exports = router;
