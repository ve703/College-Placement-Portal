const express = require("express");
const router = express.Router();
const Job = require("../Schemas/Job.js");
router.post("/deljob/:jobid", async (req, res) => {
  const token = req.header("AuthToken");
  const jobid = req.params.jobid;
  console.log(jobid);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  await Job.findByIdAndDelete(jobid);
  res.json({ msg: "Job Deleted", msgType: "success" });
});
module.exports = router;
