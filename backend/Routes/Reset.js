const express = require("express");
const router = express.Router();
const btechdata = require("../Schemas/BTechData.js");
const mtechdata = require("../Schemas/MTechData.js");
const User = require("../Schemas/User.js");
const Job = require("../Schemas/Job.js");
router.get("/reset", async (req, res) => {
  const token = req.header("AuthToken");
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  await Job.deleteMany();
  await User.updateMany(
    {},
    {
      $set: {
        currbatch: false,
      },
    }
  );
  await btechdata.updateMany(
    {},
    {
      $set: {
        unplaced: [],
        placed: [],
      },
    }
  );
  await mtechdata.updateMany(
    {},
    {
      $set: {
        unplaced: [],
        placed: [],
      },
    }
  );
  res.json({ msg: "Data Resetted", msgType: "success" });
});
module.exports = router;
