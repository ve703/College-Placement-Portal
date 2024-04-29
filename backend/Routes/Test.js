const express = require("express");
const router = express.Router();
const BtechData = require("../Schemas/BTechData.js");
router.post("/test", async (req, res) => {
  await BtechData.create({
    name: req.body.branch,
  });
  res.json({ msg: "Registered", msgType: "success" });
});
module.exports = router;
