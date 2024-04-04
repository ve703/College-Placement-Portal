const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
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
