const mongoose = require("mongoose");

const HikeSchema = new mongoose.Schema({
  hikeName: {
    type: String,
    trim: true,
    required: [true, "Please add name"],
  },
  hikeLength: {
    type: Number,
    required: [true, "Please add a length"],
  },
  hikeRating: {
    type: Number,
    required: [true, "Please add a rating"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hike", HikeSchema);
