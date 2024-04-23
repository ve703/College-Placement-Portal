const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
const jwt = require("jsonwebtoken");
const secret = "MERNSTACKFYP";
router.put("/update", async (req, res) => {
  const token = req.header("AuthToken");
  console.log(req.body);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const data = jwt.verify(token, secret);
  const userid = data.user.id;
  const newdata = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    branch: req.body.branch,
    currcpi: req.body.currcpi,
    regnumber: req.body.regnumber,
    phone: req.body.phone,
    sex: req.body.sex,
    dob: req.body.dob,
    enrollmentyear: req.body.enrollmentyear,
    degree: req.body.degree,
  };
  await User.findByIdAndUpdate(userid, { $set: newdata }, { new: true });
  console.log(data.user.id);
  res.json({ msg: "success" });
});
module.exports = router;
