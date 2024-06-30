// models/History.js

const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  designation: { type: String},
  posted_date: { type: Date},
  active: { type: Number},
  awaiting: { type: Number},
  conducting: { type: Number},
  hired: { type: Number,default:0},
  location: { type: String},
  created_at: { type: Date, default: Date.now },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
