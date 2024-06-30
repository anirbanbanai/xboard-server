/* internal imports */
const userService = require("../../services/v1/auth.service");

/* account registration */
exports.accountRegistration = async (req, res, next) => {
  try {
    await userService.accountRegistration(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* account login */
exports.accountLogin = async (req, res, next) => {
  try {
    await userService.accountLogin(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* password reset */
exports.accountReset = async (req, res, next) => {
  try {
    await userService.accountReset(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.verifyAccountReset = async (req, res, next) => {
  try {
    await userService.verifyAccountReset(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.confirmAccountPersist = async (req, res, next) => {
  try {
    await userService.confirmAccountPersist(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

/* persist login */
exports.accountPersist = async (req, res, next) => {
  try {
    await userService.accountPersist(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
