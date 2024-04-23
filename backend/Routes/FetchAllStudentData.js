const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");

router.get("/fetchallstudentdata", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const students = await User.find();
  console.log(students);
  res.json({ students });
});
module.exports = router;
