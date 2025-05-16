const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// GET: Lấy tất cả đánh giá
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST: Thêm đánh giá mới
router.post("/", async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: "Error creating testimonial" });
  }
});

module.exports = router;
