const express = require("express");
const port = 5000;
const cors = require("cors");
const app = express();
const connectToMongo = require("./db.js");
connectToMongo();
app.use(cors());
app.use(express.json());
app.use("/api/v1", require("./Routes/Login.js"));
app.use("/api/v1", require("./Routes/Register.js"));
app.use("/api/v1", require("./Routes/UpdateUserInfo.js"));
app.use("/api/v1", require("./Routes/FetchStudentData.js"));
app.use("/api/v1", require("./Routes/AddJob.js"));
app.use("/api/v1", require("./Routes/FetchJobs.js"));
app.use("/api/v1", require("./Routes/ApplyJob.js"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
