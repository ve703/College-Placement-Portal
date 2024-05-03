const mongoose = require("mongoose");
const { Schema } = mongoose;
const MTechSchema = new Schema({
  name: {
    type: String,
  },
  unplaced: {
    type: Array,
    default: [],
  },
  placed: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("mtechdata", MTechSchema);
