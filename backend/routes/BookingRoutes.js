const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const bookingData = {
      ...req.body,
      checkInDate: new Date(req.body.checkInDate),
    };

    const booking = new Booking(bookingData);
    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    console.log("Error creating booking:", error);
    res
      .status(500)
      .json({ message: "Error creating booking", error: error.message });
  }
});

module.exports = router;
