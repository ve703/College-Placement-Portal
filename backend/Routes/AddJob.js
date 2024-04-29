const express = require("express");
const router = express.Router();
const Job = require("../Schemas/Job.js");
const User = require("../Schemas/User.js");
const dotenv = require("dotenv");
dotenv.config();
var nodemailer = require("nodemailer");
router.post("/addjob", async (req, res) => {
  const token = req.header("AuthToken");
  const userData = await User.find();
  var senderArray = [];
  userData.map((i) => {
    if (i.userType == 0) {
      senderArray.push(i.email);
    }
  });
  console.log(senderArray);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });
  let ldta =
    req.body.lastDay + "/" + req.body.lastMonth + "/" + req.body.lastYear;
  var mailOptions = {
    from: "sdawebdev@gmail.com",
    to: senderArray,
    subject: "New Job Application Open!",
    text: `New Job Application open by ${req.body.CompanyName}. CTC: ${req.body.ctc} LPA. minimum CPI: ${req.body.mincpi}. Last Date to Apply: ${ldta}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
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
