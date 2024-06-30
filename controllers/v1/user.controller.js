const userService = require("../../services/v1/user.service");

exports.getAllUser = async (req, res, next) => {
  try {
    await userService.getAllUser(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};

exports.getSingleUser = async (req, res, next) => {
  try {
    await userService.getSingleUser(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(`Route: ${req.url} || Method: ${req.method}`);
  }
};
