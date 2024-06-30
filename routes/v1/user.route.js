/* external import */
const express = require("express");

/* internal import */
const userController = require("../../controllers/v1/user.controller");
const authorize = require("../../middleware/authorize.middleware");
const verify = require("../../middleware/verify.middleware");

/* router level connection */
const router = express.Router();

/* router methods integration */
// get all user
router.get("/all", userController.getAllUser);

// get single user
router.get(
  "/:id",
  verify,
  authorize("job-seeker"),
  userController.getSingleUser
);

/* export user router */
module.exports = router;
