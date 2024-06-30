// routes/historyRoutes.js

const express = require('express');
const router = express.Router();
const historyController = require('../../controllers/v1/history.controller');

// Create a new history record
router.post('/', historyController.createHistory);

// Get all history records
router.get('/', historyController.getAllHistories);

// Get a history record by ID
router.get('/:id', historyController.getHistoryById);

// Update a history record by ID
router.put('/:id', historyController.updateHistoryById);

// Delete a history record by ID
router.delete('/:id', historyController.deleteHistoryById);

module.exports = router;
