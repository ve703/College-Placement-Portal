const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
const jwt = require("jsonwebtoken");
const secret = "MERNSTACKFYP";
router.post("/login", async (req, res) => {
  const userData = await User.find({ email: req.body.email });
  if (userData.length === 0 || userData[0].password !== req.body.password) {
    return res
      .status(400)
      .json({ msg: "Incorrect Credentials", msgType: "error" });
  }
  let data = {
    user: {
      id: userData[0]._id,
    },
  };
  const AuthToken = jwt.sign(data, secret);
  console.log(data);
  console.log(userData);
  res.json({
    msg: "Logged Successfully",
    msgType: "success",
    userType: userData[0].userType,
    AuthToken: AuthToken,
  });
});
module.exports = router;
