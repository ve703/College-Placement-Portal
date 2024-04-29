const express = require("express");
const router = express.Router();
const mtechData = require("../Schemas/MTechData.js");
router.get("/fetchmtechdata", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const mtechdatabybranch = await mtechData.find();
  res.json({ mtechdatabybranch });
});
module.exports = router;
