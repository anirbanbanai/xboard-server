// controllers/historyController.js

const historyService = require('../../services/v1/history.service');

// Create a new history record
const createHistory = async (req, res) => {
  try {
    const history = await historyService.createHistory(req.body);
    res.status(201).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error creating history record', error });
  }
};

// Get all history records
const getAllHistories = async (req, res) => {
  try {
    const histories = await historyService.getAllHistories();
    res.status(200).json(histories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching history records', error });
  }
};

// Get a history record by ID
const getHistoryById = async (req, res) => {
  try {
    const history = await historyService.getHistoryById(req.params.id);
    if (!history) {
      return res.status(404).json({ message: 'History record not found' });
    }
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching history record', error });
  }
};

// Update a history record by ID
const updateHistoryById = async (req, res) => {
  try {
    const history = await historyService.updateHistoryById(req.params.id, req.body);
    if (!history) {
      return res.status(404).json({ message: 'History record not found' });
    }
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error updating history record', error });
  }
};

// Delete a history record by ID
const deleteHistoryById = async (req, res) => {
  try {
    const history = await historyService.deleteHistoryById(req.params.id);
    if (!history) {
      return res.status(404).json({ message: 'History record not found' });
    }
    res.status(200).json({ message: 'History record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting history record', error });
  }
};

module.exports = {
  createHistory,
  getAllHistories,
  getHistoryById,
  updateHistoryById,
  deleteHistoryById,
};
