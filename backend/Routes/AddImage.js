const express = require("express");
const router = express.Router();
const User = require("../Schemas/User.js");
const jwt = require("jsonwebtoken");
const secret = "MERNSTACKFYP";
const app = express();
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

const multer = require("multer");

var uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

cloudinary.config({
  cloud_name: "dg3rguaqs",
  api_key: "615219573684554",
  api_secret: "2-p1fNZvskHuLGFLLS_SJmbQPzg",
});

router.post("/photo", uploader.single("file"), async (req, res) => {
  const token = req.header("AuthToken");
  console.log(req.body);
  if (!token) {
    res.status(400).json({ msg: "Authentication Error", msgType: "error" });
  }
  const data = jwt.verify(token, secret);
  const userid = data.user.id;
  console.log(userid);

  // if (!req.file) {
  //   return res.status(400).json({ msg: "No file uploaded", msgType: "error" });
  // }

  // const file = req.files.photo;

  // await cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
  //   console.log(result);
  //   console.log(error);
  // });

  console.log(req.body);

  // const uploadFile = async (filePath) => {
  //   try {
  //     const result = await cloudinary.uploader.upload(filePath);
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const result = await cloudinary.uploader.upload(req.file.path);
  const photoUrl = result.secure_url;
  console.log(result);

  await User.findByIdAndUpdate(
    userid,
    { $set: { photo: photoUrl } },
    { new: true }
  );
  console.log(data.user.id);
  console.log(data.user);
  res.json({ msg: "success" });
});

module.exports = router;
