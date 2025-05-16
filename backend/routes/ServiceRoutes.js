const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// GET: Lấy tất cả dịch vụ
router.get("/", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST: Thêm dịch vụ mới
router.post("/", async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: "Error creating service" });
  }
});

module.exports = router;
