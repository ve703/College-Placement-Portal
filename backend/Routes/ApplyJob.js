const express = require("express");
const router = express.Router();
const Job = require("../Schemas/Job.js");
router.post("/applyjob/:jobid", async (req, res) => {
  const token = req.header("AuthToken");
  const jobid = req.params.jobid;
  console.log(jobid);
  const jobdata = await Job.findById(jobid);
  //   console.log(jobdata);
  console.log(req.body);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  jobdata.AppliedCandidates.push(req.body);
  await jobdata.save();
  console.log(jobdata);
  res.json({ msg: "Job Added", msgType: "success" });
});
module.exports = router;
