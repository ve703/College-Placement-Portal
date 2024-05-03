const express = require("express");
const router = express.Router();
const InterviewData = require("../Schemas/Interview.js");
router.post("/addinterview", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  await InterviewData.create({
    studentName: req.body.name,
    companyName: req.body.companyName,
    cpi: req.body.cpi,
    branch: req.body.branch,
    drivelink: req.body.drivelink,
    experiance: req.body.experiance,
  });
  res.json({ msg: "Experience Added!", msgType: "success" });
});
module.exports = router;
