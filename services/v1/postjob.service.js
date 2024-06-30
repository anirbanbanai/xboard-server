// services/jobService.js
const Job = require("../../models/v1/post.job");
const History = require('../../models/v1/history.model');

const createJob = async (jobData) => {
    const job = new Job(jobData);
    return await job.save();
};


const getAllJobs = async () => {
    return await Job.find({});
};

const getJobById = async (id) => {
    return await Job.findById(id);
};

const updateJob = async (id, jobData) => {
    return await Job.findByIdAndUpdate(id, jobData, { new: true });
};

const deleteJob = async (id) => {
    return await Job.findByIdAndDelete(id);
};

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
};
