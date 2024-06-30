const otpService = require("../../services/v1/otp.service");

exports.sendOTP = async (req, res, next) => {
  try {
    await otpService.sendOTP(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.verifyOTP = async (req, res, next) => {
  try {
    await otpService.verifyOTP(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
