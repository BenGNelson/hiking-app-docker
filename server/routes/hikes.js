const express = require("express");
const router = express.Router();
const { getHikes, addHike, deleteHike, deleteAllHikes } = require("../controllers/hikes");

router.route("/").get(getHikes).post(addHike);

router.route("/:id").delete(deleteHike);

router.route("/").delete(deleteAllHikes);



module.exports = router;
