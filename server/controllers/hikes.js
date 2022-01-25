const Hike = require("../models/Hike");

// @desc    Get all hikes
// @route   GET /api/v1/hikes
// @access  Public
exports.getHikes = async (req, res, next) => {
  try {
    const hikes = await Hike.find();

    return res.status(200).json({
      success: true,
      count: hikes.length,
      data: hikes,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add hikes
// @route   POST /api/v1/hikes
// @access  Public
exports.addHike = async (req, res, next) => {
  try {
    const { hikeName, hikeLength, hikeRank } = req.body;

    if (!hikeName) {
      return res.status(400).json({
        success: false,
        error: "Hike must have a name",
      });
    }

    if (hikeLength < 0) {
      return res.status(400).json({
        success: false,
        error: "Lenght must be greater than 0",
      });
    }

    if (hikeRank < 0 || hikeRank > 10) {
      return res.status(400).json({
        success: false,
        error: "Rank must be between 1 and 10",
      });
    }

    const hike = await Hike.create(req.body);

    return res.status(201).json({
      success: true,
      data: hike,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete hike
// @route   DELETE /api/v1/hikes/:id
// @access  Public
exports.deleteHike = async (req, res, next) => {
  try {
    const hike = await Hike.findById(req.params.id);

    if (!hike) {
      return res.status(404).json({
        success: false,
        error: "No hike found",
      });
    }

    await hike.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
