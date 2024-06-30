// models/payment.model.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  fullName: { type: String, },
  email: { type: String, },
  payment_option: { type: String, },
  currency: { type: String, },
  invoiceNumber: { type: String, },
  invoiceDate: { type: Date, },
  dueDate: { type: Date, },
  billTo: { type: String, },
  employer_name: { type: String, },
  company_name: { type: String, },
  items: [
    {
      description: { type: String, },
      rate: { type: Number, },
      hours: { type: Number, },
      amount: { type: Number, },
    }
  ],
  notes: { type: String },
  totalAmount: { type: Number, },
  paymentStatus: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
