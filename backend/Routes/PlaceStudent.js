const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
router.post("/placestudent/:userid", async (req, res) => {
  const token = req.header("AuthToken");
  const userid = req.params.userid;
  console.log(userid);
  const UserData = await User.findById(userid);
  //   console.log(jobdata);
  //   console.log(req.body);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const newdata = {
    placed: true,
  };
  //   jobdata.AppliedCandidates.push(req.body);
  //   await jobdata.save();
  //   console.log(jobdata);
  await User.findByIdAndUpdate(userid, { $set: newdata }, { new: true });
  res.json({ msg: "Accepted Offer!", msgType: "success" });
});
module.exports = router;
