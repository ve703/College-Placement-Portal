const express = require("express");
const router = express.Router();
const BtechData = require("../Schemas/BTechData.js");
router.get("/fetchbtechdata", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const btechdatabybranch = await BtechData.find();
  res.json({ btechdatabybranch });
});
module.exports = router;
