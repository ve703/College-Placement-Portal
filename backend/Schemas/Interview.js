const mongoose = require("mongoose");
const { Schema } = mongoose;
const InterviewSchema = new Schema({
  studentName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  branch: {
    type: String,
  },
  cpi: {
    type: String,
  },
  drivelink: {
    type: String,
  },
  experiance: {
    type: String,
  },
});

module.exports = mongoose.model("interviews", InterviewSchema);
