// const express = require("express");
// const JobController = require("../controllers/jobController");

// const router = express.Router();

// router.post("/", JobController.createJob);
// router.get("/", JobController.getJobs);
// router.get("/:id", JobController.getJobById);
// router.put("/:id", JobController.updateJob);
// router.delete("/:id", JobController.deleteJob);

// module.exports = router;


/* External import */
const express = require("express");

/* Internal import */
const jobController = require("../../controllers/v1/jobs.controller");
const authorize = require("../../middleware/authorize.middleware");
const verify = require("../../middleware/verify.middleware");

/* Router level connection */
const router = express.Router();

/* Router methods integration */
// Get all jobs
router.get("/", jobController.getAllJobs);

// Get a single job
router.get("/:id", jobController.getSingleJob);

// Create a new job
router.post("/", jobController.createJob);

// Update a job
router.put("/:id", jobController.updateJob);

// Delete a job
router.delete("/:id", jobController.deleteJob);

/* Export job router */
module.exports = router;
