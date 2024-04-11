const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
const jwt = require("jsonwebtoken");
const secret = "MERNSTACKFYP";
router.get("/fetchdata", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const data = jwt.verify(token, secret);
  const userid = data.user.id;
  const userData = await User.findOne({ _id: userid });
  res.json({ userData });
});
module.exports = router;
