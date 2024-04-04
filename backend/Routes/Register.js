const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
router.post("/register", async (req, res) => {
  const userData = await User.find({ email: req.body.email });
  if (userData.length !== 0) {
    return res.status(400).json({ msg: "User Exists", msgType: "error" });
  }
  await User.create({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    userType: req.body.userType,
  });
  res.json({ msg: "Registered", msgType: "success" });
});
module.exports = router;
