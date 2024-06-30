// services/historyService.js

const History = require('../../models/v1/history.model');

// Create a new history record
const createHistory = async (data) => {
  const history = new History(data);
  return await history.save();
};

// Get all history records
const getAllHistories = async () => {
  return await History.find();
};

// Get a history record by ID
const getHistoryById = async (id) => {
  return await History.findById(id);
};

// Update a history record by ID
const updateHistoryById = async (id, data) => {
  return await History.findByIdAndUpdate(id, data, { new: true });
};

// Delete a history record by ID
const deleteHistoryById = async (id) => {
  return await History.findByIdAndDelete(id);
};

module.exports = {
  createHistory,
  getAllHistories,
  getHistoryById,
  updateHistoryById,
  deleteHistoryById,
};
