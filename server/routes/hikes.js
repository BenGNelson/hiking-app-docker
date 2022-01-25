const express = require("express");
const router = express.Router();
const { getHikes, addHike, deleteHike } = require("../controllers/hikes");

router.route("/").get(getHikes).post(addHike);

router.route("/:id").delete(deleteHike);

module.exports = router;
