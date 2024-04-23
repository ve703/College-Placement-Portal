const express = require("express");
const router = express.Router();
const Job = require("../Schemas/Job.js");
router.post("/addjob", async (req, res) => {
  const token = req.header("AuthToken");
  console.log(req.body);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  await Job.create({
    CompanyName: req.body.CompanyName,
    JobLocation: req.body.JobLocation,
    BranchAllowed: req.body.BranchAllowed,
    mincpi: req.body.mincpi,
    JobProfile: req.body.JobProfile,
    LastDatetoApply: req.body.LastDatetoApply,
    dov: req.body.dov,
    ctc: req.body.ctc,
    lastDay: req.body.lastDay,
    lastMonth: req.body.lastMonth,
    lastYear: req.body.lastYear,
    lastHour: req.body.lastHour,
    lastMinute: req.body.lastMinute,
    AppliedCandidates: req.body.AppliedCandidates,
    DegreeAllowed: req.body.DegreeAllowed,
    MTechBranchAllowed: req.body.MTechBranchAllowed,
  });
  res.json({ msg: "Job Added", msgType: "success" });
});
module.exports = router;
