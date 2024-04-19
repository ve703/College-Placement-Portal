const express = require("express");
const router = express.Router();
const Job = require("../Schemas/Job.js");
router.get("/fetchjobdata", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const jobData = await Job.find();
  console.log(jobData);
  res.json({ jobData });
});
module.exports = router;
