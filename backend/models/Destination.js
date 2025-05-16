const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  cost: { type: String, required: true },
  duration: { type: String, required: true },
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
