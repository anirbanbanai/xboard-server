const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let connection = null;

const connectDB = async () => {
  try {
    if (connection) return;

    connection = await mongoose.connect(process.env.ATLAS_URI, {});
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
