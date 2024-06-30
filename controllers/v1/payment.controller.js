// controllers/payment.controller.js
const paymentService = require("../../services/v1/payment.service");

const createPayment = async (req, res) => {
  try {
    const paymentData = req.body;
    const payment = await paymentService.createPayment(paymentData);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await paymentService.getPayments();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.id);
    if (!payment) {
      res.status(404).json({ message: "Payment not found" });
    } else {
      res.status(200).json(payment);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    const payment = await paymentService.updatePayment(req.params.id, req.body);
    if (!payment) {
      res.status(404).json({ message: "Payment not found" });
    } else {
      res.status(200).json(payment);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const payment = await paymentService.deletePayment(req.params.id);
    if (!payment) {
      res.status(404).json({ message: "Payment not found" });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
