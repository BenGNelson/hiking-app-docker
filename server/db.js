const mongoose = require("mongoose");
const dotenv = require("dotenv");

mongoose.Promise = global.Promise;

dotenv.config({
  path: "./config/config.env",
});

const db = {};
db.mongoose = mongoose;
db.url = `mongodb://${process.env.MONGO_ADMIN}:${process.env.MONGO_PASSWORD}@mongodb:${process.env.MONGO_PORT}/hiking-db?authSource=admin`;
module.exports = db;