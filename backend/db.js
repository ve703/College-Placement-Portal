const mongoose = require("mongoose");
const Mongo = "mongodb://127.0.0.1:27017/test";
const connectToMongo = async () => {
  await mongoose.connect(Mongo);
  console.log("CONNECTED");
};
module.exports = connectToMongo;
