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
});

module.exports = mongoose.model("users", UserSchema);
