const mongoose = require("mongoose");
const { Schema } = mongoose;
const JobSchema = new Schema({
  CompanyName: {
    type: String,
  },
  JobLocation: {
    type: String,
  },
  BranchAllowed: {
    type: Array,
    default: [],
  },
  mincpi: {
    type: Number,
  },
  JobProfile: {
    type: String,
  },
  LastDatetoApply: {
    type: String,
  },
  dov: {
    type: String,
  },
  ctc: {
    type: Number,
  },
  lastDay: {
    type: Number,
  },
  lastMonth: {
    type: Number,
  },
  lastYear: {
    type: Number,
  },
  lastHour: {
    type: Number,
  },
  lastMinute: {
    type: Number,
  },
  AppliedCandidates: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("jobs", JobSchema);
