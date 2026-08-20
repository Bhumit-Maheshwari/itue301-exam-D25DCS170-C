const express = require("express");
const router = express.Router();
const Borrowing = require("../models/Borrowing");

// GET /api/v1/borrowings — Return all borrowings with populated references
router.get("/", async (req, res, next) => {
    try {
        const borrowings = await Borrowing.find().populate("memberId").populate("bookId");
        res.status(200).json({ success: true, data: borrowings });
    } catch (err) {
        next(err);
    }
});

// POST /api/v1/borrowings — Create a new borrowing
router.post("/", async (req, res, next) => {
    try {
        const borrowing = await Borrowing.create(req.body);
        res.status(201).json({ success: true, data: borrowing });
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
