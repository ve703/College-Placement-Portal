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
app.use("/api/v1", require("./Routes/AddOfferedCandidate.js"));
app.use("/api/v1", require("./Routes/PlaceStudent.js"));
app.use("/api/v1", require("./Routes/FetchAllStudentData.js"));
app.use("/api/v1", require("./Routes/Test.js"));
app.use("/api/v1", require("./Routes/FetchBTechData.js"));
app.use("/api/v1", require("./Routes/FetchMTechData.js"));
app.use("/api/v1", require("./Routes/AddImage.js"));
app.use("/api/v1", require("./Routes/AddInterview.js"));
app.use("/api/v1", require("./Routes/FetchInterviews.js"));
app.use("/api/v1", require("./Routes/Reset.js"));
app.use("/api/v1", require("./Routes/DelJob.js"));
app.use("/api/v1", require("./Routes/generateotp.js"));
app.use("/api/v1", require("./Routes/ResetPassword.js"));
// app.use("/api/v1", require("./Routes/generateotp.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
