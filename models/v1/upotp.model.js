// src/models/otp.model.js
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // OTP expires in 5 minutes
  },
});

const OTP = mongoose.models.OTP || mongoose.model('OTP', otpSchema);

module.exports = OTP;
