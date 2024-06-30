const nodemailer = require('nodemailer');
const OTP = require('../../models/v1/upotp.model');
const crypto = require('crypto');

const generateOTP = () => {
  return crypto.randomBytes(3).toString('hex'); // Generates a 6-character OTP
};

const sendOTPEmail = async (email, otp) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.PASSWORD, // Your email password
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
  };

  await transporter.sendMail(mailOptions);
};

const createAndSendOTP = async (email) => {
  const otp = generateOTP();
  const otpInstance = new OTP({ email, otp });
  await otpInstance.save();
  await sendOTPEmail(email, otp);
};

module.exports = {
  createAndSendOTP,
};
