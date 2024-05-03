const express = require("express");
const router = express.Router();
const InterviewData = require("../Schemas/Interview.js");
router.get("/fetchinterviewdata", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const interviewdata = await InterviewData.find();
  res.json({ interviewdata });
});
module.exports = router;
