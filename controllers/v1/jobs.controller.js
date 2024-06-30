const jobService = require("../../services/v1/jobs.service");

exports.getAllJobs = async (req, res, next) => {
  try {
    await jobService.getAllJobs(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.getSingleJob = async (req, res, next) => {
  try {
    await jobService.getSingleJob(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.createJob = async (req, res, next) => {
  try {
    await jobService.createJob(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.updateJob = async (req, res, next) => {
  try {
    await jobService.updateJob(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.deleteJob = async (req, res, next) => {
  try {
    await jobService.deleteJob(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
