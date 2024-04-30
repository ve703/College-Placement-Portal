const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
const btechdata = require("../Schemas/BTechData.js");
const mtechdata = require("../Schemas/MTechData.js");
router.post("/placestudent/:userid", async (req, res) => {
  const token = req.header("AuthToken");
  const userid = req.params.userid;
  // console.log(req.body);
  // console.log(userid);
  const UserData = await User.findById(userid);
  var ndata;
  var mdata;
  if (UserData.degree == "MTech" || UserData.degree == "MCA") {
    mdata = await mtechdata.findOne({ name: UserData.branch });
  } else {
    ndata = await btechdata.findOne({ name: UserData.branch });
  }
  // console.log(ndata);
  if (UserData.degree == "BTech") {
    if (!ndata.placed.includes(userid)) {
      const index = ndata.unplaced.indexOf(userid);
      console.log(index);
      const x = ndata.unplaced.splice(index, 1);
      console.log(x);
      // ndata.unplaced = x;
      ndata.placed.push(userid);
    }
    await ndata.save();
  } else {
    if (!mdata.placed.includes(userid)) {
      const index = mdata.unplaced.indexOf(userid);
      console.log(index);
      const x = mdata.unplaced.splice(index, 1);
      console.log(x);
      // ndata.unplaced = x;
      mdata.placed.push(userid);
    }
    mdata.save();
  }
  var newEligibleArray = UserData.eligibleArr;
  if (req.body.currctc < 12) {
    newEligibleArray[0] = true;
  } else if (req.body.currctc >= 12 && req.body.currctc < 40) {
    newEligibleArray[1] = true;
  } else if (req.body.currctc >= 40) {
    newEligibleArray[2] = true;
  }
  //   console.log(jobdata);
  //   console.log(req.body);
  console.log(newEligibleArray);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const newdata = {
    eligibleArr: newEligibleArray,
    jobOffers: UserData.jobOffers + 1,
    placedCompanyid: req.body.placedCompanyid,
    placedCompany: req.body.placedCompany,
    placed: true,
  };
  //   jobdata.AppliedCandidates.push(req.body);
  //   await jobdata.save();
  //   console.log(jobdata);
  await User.findByIdAndUpdate(userid, { $set: newdata }, { new: true });
  res.json({ msg: "Accepted Offer!", msgType: "success" });
});
module.exports = router;
