const express = require("express");
const router = express.Router();
const Destination = require("../models/Destination");

router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newDestination = new Destination(req.body);

    await newDestination.save();

    res
      .status(201)
      .json({ message: "Destination added successfully", newDestination });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating destination", error: error.message });
  }
});

module.exports = router;
