const mongoose = require("mongoose");
const { Schema } = mongoose;
const JobSchema = new Schema({
  processCompleted: {
    type: Boolean,
    default: false,
  },
  CompanyName: {
    type: String,
  },
  JobLocation: {
    type: String,
  },
  currbatch: {
    type: Boolean,
    default: false,
  },
  DegreeAllowed: {
    type: Array,
    default: [],
  },
  MTechBranchAllowed: {
    type: Array,
    default: [],
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
  OfferedCandidates: {
    type: Array,
    default: [],
  },
  AppliedCandidates: {
    type: Array,
    default: [],
  },
  photo: {
    type: String,
    default: "",
  },
  description: {
    type: String, // Added description property
    default: "",
  },
});

module.exports = mongoose.model("jobs", JobSchema);
