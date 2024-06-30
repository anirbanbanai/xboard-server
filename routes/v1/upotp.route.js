const express = require('express');
const router = express.Router();
const otpController = require('../../controllers/v1/upotp.controller');

router.post('/send-otp', otpController.sendOtp);
router.post('/verify-otp', otpController.verifyOTP);

module.exports = router;
