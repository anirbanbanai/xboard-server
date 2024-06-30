const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const jobsSchema = new mongoose.Schema({

job_name:{
    type: String,
    required: [true, "Please, provide your job name"],
  },
company_name:{
    type: String,
    required: [true, "Please, provide your company name"],
  },
  location:{
    type: String,
    required: [true, "Please, provide your location"],
  },
  industry:{
    type: String,
    required: [true, "Please, provide your industry"],
  },
  size_of_company:{
    type: String,
    required: [true, "Please, provide your size_of_company"],
  },
  job_posted:{
    type: String,
    required: [true, "Please, provide your job_posted"],
  },
  job_filled:{
    type: String,
    required: [true, "Please, provide your job_filled"],
  },
  job_rate_per_hour:{
    type: String,
    required: [true, "Please, provide your job_rate_per_hour"],
  },
  hours_per_week:{
    type: String,
    required: [true, "Please, provide your hours_per_week"],
  },
  employment:{
    type: String,
    required: [true, "Please, provide your employment"],
  },
  experience_level:{
    type: String,
    required: [true, "Please, provide your experience_level"],
  },
  job_description:{
    type: String,
    required: [true, "Please, provide your job_description"],
  },
  by_employee_name:{
    type: String,
    required: [true, "Please, provide your by_employee_name"],
  },

})

const JobsModels = mongoose.model("jobsmodel", jobsSchema);

module.exports = JobsModels;