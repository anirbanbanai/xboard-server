// service.js
const Application = require('../../models/v1/application.model');

// Create a new application
const createApplication = async (applicationData) => {
  const application = new Application(applicationData);
  return await application.save();
};

// Get an application by ID
const getApplicationById = async (id) => {
  return await Application.findById(id);
};

// Get all applications
const getAllApplications = async () => {
  return await Application.find();
};

// Update an application by ID
const updateApplication = async (id, updateData) => {
  return await Application.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete an application by ID
const deleteApplication = async (id) => {
  return await Application.findByIdAndDelete(id);
};

module.exports = {
  createApplication,
  getApplicationById,
  getAllApplications,
  updateApplication,
  deleteApplication,
};
