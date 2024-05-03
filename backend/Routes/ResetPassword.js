const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");

// Middleware to parse JSON bodies
router.use(express.json());

router.post("/resetpass", async (req, res) => {
  // Check if email and new password are provided
  if (!req.body.email || !req.body.newpass) {
    return res
      .status(400)
      .json({ msg: "Email and new password are required", msgType: "error" });
  }

  try {
    const newdata = {
      password: req.body.newpass,
    };

    // Find user by email and update password
    const updatedUser = await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: newdata },
      { new: true }
    );

    // Check if user exists
    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found", msgType: "error" });
    }

    // Password updated successfully
    return res.json({ msg: "Password updated", msgType: "success" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Internal Server Error", msgType: "error" });
  }
});

module.exports = router;
