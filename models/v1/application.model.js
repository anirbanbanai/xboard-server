const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    employer_name: {
      type: String
    },
    job_title: {
      type: String
    },
    job_type: {
      type: String
    },
    status: {
      type: String
    },
    job_post: {
      type: String
    },
    subject: {
      type: String
    },
    message: {
      type: String
    },
    contact_info: {
      type: String
    },
  },
  {
    timestamps: true, 
  }
);

const Application = mongoose.model("application", applicationSchema);

module.exports = Application;
