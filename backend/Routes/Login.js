const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
router.post("/login", async (req, res) => {
  const userData = await User.find({ email: req.body.email });
  if (userData.length === 0 || userData[0].password !== req.body.password) {
    return res
      .status(400)
      .json({ msg: "Incorrect Credentials", msgType: "error" });
  }
  res.json({
    msg: "Registered Successfully",
    msgType: "success",
    userType: userData.userType,
  });
});
module.exports = router;
