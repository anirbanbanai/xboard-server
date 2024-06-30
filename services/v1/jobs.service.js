const JobsModels = require("../../models/v1/jobs.models");

// Get all jobs with pagination and field selection
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await JobsModels.find({});

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Jobs retrieved successfully",
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message,
    });
  }
};

// Get a single job by ID
exports.getSingleJob = async (req, res) => {
  try {
    const job = await JobsModels.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "Job not found",
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Job retrieved successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message,
    });
  }
};

// Create a new job
exports.createJob = async (req, res) => {
  try {
    const newJob = new JobsModels(req.body);
    const savedJob = await newJob.save();

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Job created successfully",
      data: savedJob,
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message,
    });
  }
};

// Update a job by ID
exports.updateJob = async (req, res) => {
  try {
    const updatedJob = await JobsModels.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "Job not found",
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Job updated successfully",
      data: updatedJob,
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message,
    });
  }
};

// Delete a job by ID
exports.deleteJob = async (req, res) => {
  try {
    const deletedJob = await JobsModels.findByIdAndDelete(req.params.id);

    if (!deletedJob) {
      return res.status(404).json({
        acknowledgement: false,
        message: "Not Found",
        description: "Job not found",
      });
    }

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      acknowledgement: false,
      message: "Internal Server Error",
      description: error.message,
    });
  }
};
