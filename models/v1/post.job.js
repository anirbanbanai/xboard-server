// models/Job.js
const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    postby: { type: String },
    job_title: {
      type: String,
      required: [true, "Please, provide your job title"],
    },
    job_headline: {
      type: String,
      required: [true, "Please, provide your job headline"],
    },
    job_type: {
      type: String,
      required: [true, "Please, provide your job type"],
    },
    hour_per_week: {
      type: String,
      required: [true, "Please, provide your job headline"],
    },
    salary: {
      type: String,
      required: [true, "Please, provide your job salary"],
    },
    experience_level: {
      type: String,
      required: [true, "Please, provide your experience level"],
    },
    company: {
      type: String
    },
    location: {
      type: String
    },
    industry: {
      type: String
    },
    size_of_company: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AllJob", jobsSchema);
