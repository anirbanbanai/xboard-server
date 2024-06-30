// controller.js
const applicationService = require('../../services/v1/application.service');

// Create a new application
const createApplication = async (req, res) => {
  try {
    const application = await applicationService.createApplication(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get an application by ID
const getApplicationById = async (req, res) => {
  try {
    const application = await applicationService.getApplicationById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all applications
const getAllApplications = async (req, res) => {
  try {
    const applications = await applicationService.getAllApplications();
    res.json(applications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an application by ID
const updateApplication = async (req, res) => {
  try {
    const application = await applicationService.updateApplication(req.params.id, req.body);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an application by ID
const deleteApplication = async (req, res) => {
  try {
    const application = await applicationService.deleteApplication(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createApplication,
  getApplicationById,
  getAllApplications,
  updateApplication,
  deleteApplication,
};
