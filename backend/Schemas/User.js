const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  firstName: {
    type: String,
    default: "Enter First Name",
  },
  lastName: {
    type: String,
    default: "Enter Last Name",
  },
  placedCompanyid: {
    type: String,
    default: "Not Placed",
  },
  placedCompany: {
    type: String,
    default: "Not Placed",
  },
  tenth: {
    type: String,
    default: "",
  },
  twelth: {
    type: String,
    default: "",
  },
  tenthschool: {
    type: String,
    default: "",
  },
  twelthschool: {
    type: String,
    default: "",
  },
  hobbies: {
    type: String,
    default: "",
  },
  jobOffers: {
    type: Number,
    default: 0,
  },
  eligibleArr: {
    type: Array,
    default: [false, false, false],
  },
  currbatch: {
    type: Boolean,
    default: true,
  },
  placed: {
    type: Boolean,
    default: false,
  },
  degree: {
    type: String,
    default: "Add Degree",
  },
  branch: {
    type: String,
    default: "Select Branch",
  },
  currcpi: {
    type: String,
    default: "Enter current CPI",
  },
  regnumber: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  sex: {
    type: String,
    default: "Select Gender",
  },
  dob: {
    type: String,
    default: "Select Date of Birth",
  },
  enrollmentyear: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  userType: {
    type: "Number",
    default: 0,
  },
  photo: {
    type: "String",
    default: "",
  },
});

module.exports = mongoose.model("users", UserSchema);
