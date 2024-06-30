// route.js
const express = require('express');
const router = express.Router();
const applicationController = require('../../controllers/v1/application.controller');

// Create a new application
router.post('/', applicationController.createApplication);

// Get an application by ID
router.get('/:id', applicationController.getApplicationById);

// Get all applications
router.get('/', applicationController.getAllApplications);

// Update an application by ID
router.put('/:id', applicationController.updateApplication);

// Delete an application by ID
router.delete('/:id', applicationController.deleteApplication);

module.exports = router;
