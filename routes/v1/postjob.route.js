// routes/jobRoutes.js
const express = require("express");
const jobController = require("../../controllers/v1/postjob.controller");

const router = express.Router();

router.post("/", jobController.createJob);
router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
router.put("/:id", jobController.updateJob);
router.delete("/:id", jobController.deleteJob);

module.exports = router;
