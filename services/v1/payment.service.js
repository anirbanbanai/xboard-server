// services/payment.service.js
const Payment = require('../../models/v1/payment.model');

const createPayment = async (paymentData) => {
  const payment = new Payment(paymentData);
  return await payment.save();
};

const getPayments = async () => {
  return await Payment.find();
};

const getPaymentById = async (id) => {
  return await Payment.findById(id);
};

const updatePayment = async (id, paymentData) => {
  return await Payment.findByIdAndUpdate(id, paymentData, { new: true });
};

const deletePayment = async (id) => {
  return await Payment.findByIdAndDelete(id);
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
