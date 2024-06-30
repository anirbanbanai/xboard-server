/* external import */
const express = require("express");

/* internal import */
const otpController = require("../../controllers/v1/otp.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */
// send otp
router.post("/send-otp", otpController.sendOTP);

// verify otp
router.get("/verify-otp/:otp", otpController.verifyOTP);

/* export user router */
module.exports = router;
