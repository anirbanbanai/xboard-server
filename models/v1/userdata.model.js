// src/models/user.model.js
const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please, provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Please, provide a valid email address"],
    unique: [true, "Email already exists, try another"],
  },
  password: {
    type: String,
    required: [true, "Please, provide a strong password"],
  },
  image: { type: String },
  role: {
    type: String,
    default: "job-seeker",
    required: [true, "Please, choose one that suits you"],
    enum: ["admin", "employer", "job-seeker"],
  },
  location: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  portfolio: {
    type: String,
  },
  skill: {
    type: String,
  },
  current_job: {
    type: String,
  },
  current_company: {
    type: String,
  },
  employment: {
    type: String,
  },
  skill_level: {
    type: String,
  },
  salary: {
    type: String,
  },
  summary: {
    type: String,
  },
  verify: { type: Boolean, default: false },
  experience: [
    {
      title: {
        type: String,
      },
      company: {
        type: String,
      },
      start_date: {
        type: String,
      },
      end_date: {
        type: String,
      },
      description: {
        type: String,
      },
      location: {
        type: String,
      },
    },
  ],
});

// Check if the model already exists, if not define it
const User = mongoose.models.UserData || mongoose.model('UserData', userDataSchema);

module.exports = User;
