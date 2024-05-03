const express = require("express");
const router = express.Router();
const Job = require("../Schemas/Job.js");
const dotenv = require("dotenv");
dotenv.config();
var nodemailer = require("nodemailer");
router.post("/offerjob/:jobid", async (req, res) => {
  const token = req.header("AuthToken");
  const jobid = req.params.jobid;
  const OfferedCandidatesArray = req.body;
  const jobdata = await Job.findById(jobid);
  var offered = [];
  var notOffered = [];
  jobdata.AppliedCandidates.map((i) => {
    if (OfferedCandidatesArray.includes(i.id)) {
      offered.push(i.email);
    } else {
      notOffered.push(i.email);
    }
  });
  console.log(offered);
  console.log(notOffered);
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });
  var mailOptions1 = {
    from: "sdawebdev@gmail.com",
    to: offered,
    subject: "Congratulations for the Offer!",
    text: `Congratulations! You are selected by ${jobdata.CompanyName}. Head over to the website to accept the offer and add interview experience`,
  };
  var mailOptions2 = {
    from: "sdawebdev@gmail.com",
    to: notOffered,
    subject: "Job Not Offered",
    text: `We regret to inform you that You are not selected by ${jobdata.CompanyName}.`,
  };
  if (offered.length !== 0) {
    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  if (notOffered.length !== 0) {
    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
  //   console.log(jobdata);
  //   console.log(req.body);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }

  const newdata = {
    processCompleted: true,
    OfferedCandidates: req.body,
  };
  //   jobdata.AppliedCandidates.push(req.body);
  //   await jobdata.save();
  //   console.log(jobdata);
  await Job.findByIdAndUpdate(jobid, { $set: newdata }, { new: true });
  res.json({ msg: "Job Added", msgType: "success" });
});
module.exports = router;
