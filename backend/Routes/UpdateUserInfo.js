const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
const jwt = require("jsonwebtoken");
const secret = "MERNSTACKFYP";
const BtechData = require("../Schemas/BTechData.js");
const mtechData = require("../Schemas/MTechData.js");
router.put("/update", async (req, res) => {
  const token = req.header("AuthToken");
  console.log(req.body);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const data = jwt.verify(token, secret);
  const userid = data.user.id;
  var Branchdata;
  var mBranchdata;
  if (req.body.degree == "BTech") {
    Branchdata = await BtechData.findOne({ name: req.body.branch });
  } else {
    mBranchdata = await mtechData.findOne({ name: req.body.branch });
  }
  if (Branchdata != null) {
    if (
      !Branchdata.unplaced.includes(userid) &&
      !Branchdata.placed.includes(userid)
    ) {
      Branchdata.unplaced.push(userid);
    }
    await Branchdata.save();
  } else if (mBranchdata != null) {
    if (
      !mBranchdata.unplaced.includes(userid) &&
      !mBranchdata.placed.includes(userid)
    ) {
      mBranchdata.unplaced.push(userid);
    }
    await mBranchdata.save();
  }
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
    twelth: req.body.twelth,
    tenth: req.body.tenth,
    tenthschool: req.body.tenthschool,
    twelthschool: req.body.twelthschool,
    hobbies: req.body.hobbies,
  };
  await User.findByIdAndUpdate(userid, { $set: newdata }, { new: true });
  console.log(data.user.id);
  res.json({ msg: "success" });
});
module.exports = router;
