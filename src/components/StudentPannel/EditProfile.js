import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Avatar,
  Link,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import logo from "./profile.png";
function EditProfile() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      navigate("/login");
    }
  });
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    branch: "",
    currcpi: "",
    regnumber: "",
    phone: "",
    sex: "",
    dob: "",
    enrollmentyear: "",
    degree: "",
    tenth: "",
    twelth: "",
    backlog: 0,
    tenthschool: "",
    twelthschool: "",
    hobbies: "",
  });
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [value2, setValue2] = useState(dayjs("2022-04-17"));
  const [ugval, setugval] = useState(true);
  const [pgval, setpgval] = useState(true);
  const sex = ["Male", "Female", "Others"];
  const degree = ["BTech", "MTech", "MCA"];

  const course = [
    "Computer Engineering",
    "Information Technology",
    "Electronics and Telecommunication Engineering",
    "Electronics Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Production Engineering",
    "Textile Engineering",
  ];
  const mcourse = [
    "Civil Engineering (with specialization in Construction Management)",
    "Civil Engineering (with specialization in Environmental Engineering)",
    "Civil Engineering (with specialization in Structural Engineering )",
    "Computer Engineering",
    "Computer Engineering (with specialization in Network Infrastructure Management Systems)",
    "Computer Engineering (with specialization in Software Engineering)",
    "Electrical Engineering (with specialization in Power Systems)",
    "Electrical Engineering (with specialization in Control Systems)",
    "Internet of Things (IOT)",
    "Electronics & Telecommunication Engineering",
    "Mechanical Engineering (with specialization in Machine Design)",
    "Mechanical Engineering (with specialization in Automobile Engineering)",
    "Mechanical Engineering (with specialization CAD/CAM & Automation)",
    "Mechanical Engineering (with specialization in Thermal Engineering)",
    "Production Engineering",
    "Project Management",
    "Textile Technology",
    "Defence Technology",
  ];
  const onChangeDeg = (e) => {
    const { name, value } = e.target;

    // Disable both UG and PG branches by default
    setugval(true);
    setpgval(true);

    if (value === "BTech") {
      // If BTech is selected, only disable PG branch

      setugval(false);
    } else if (value === "MTech") {
      // If MTech is selected, only disable UG branch
      setpgval(false);
    } else if (value === "MCA") {
      // If MCA is selected, disable both UG and PG branches
      setugval(true);
      setpgval(true);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDateChange = (date) => {
    console.log(date);
    setFormData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };
  const handleEnrollmentChange = (year) => {
    console.log(year);
    setFormData((prevData) => ({
      ...prevData,
      enrollmentyear: year,
    }));
  };
  // function convertToBase64(e) {
  //   console.log(e);
  //   var reader = new FileReader();
  //   console.log(e.target.files);
  //   if (e.target.files[0].size >= 1500000) {
  //     window.alert("Size must be less than 1.5 MB");
  //   } else {
  //     reader.readAsDataURL(e.target.files[0]);
  //     reader.onload = () => {
  //       console.log(reader.result);
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         imgb64: reader.result,
  //       }));
  //       console.log(formData);
  //     };
  //     reader.onerror = () => {
  //       console.log("ERROR");
  //     };
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    // Here you can send the updated profile data to the server

    // Simulating a server request
    if (formData.currcpi > 10 || formData.currcpi < 0) {
      message.warning("Incorrect CPI Details. CPI Must be between 0 to 10");
    } else if (formData.phone.length !== 10) {
      message.warning(
        "Incorrect Phone Number. Phone number must be 10 digit long"
      );
    } else if (
      formData.tenth > 100 ||
      formData.twelth > 100 ||
      formData.tenth < 0 ||
      formData.twelth < 0
    ) {
      message.warning("School percentage must be between 0 to 100");
    } else {
      const response = await fetch("http://localhost:5000/api/v1/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          AuthToken: localStorage.getItem("AuthToken"),
        },
        body: JSON.stringify(formData),
      });
      const r = await response.json();
      console.log(r);
      if (r.msg === "success") {
        message.success("Profile Updated");
        navigate("/candidate");
      } else {
        message.warning("Profile Update Failed");
      }
    }
    console.log(formData);
  };

  return (
    <Container component="main" maxWidth="70%" sx={{ width: "100%" }}>
      {loading && (
        <div className="spinner">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
      <Paper
        sx={{
          border: "0.5 px solid black",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.4)",
          // marginLeft: "50px",
          // marginRight: "50px",
          padding: "50px",
          marginBottom: "50px",
          width: "95%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            // marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>

        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Edit Profile
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
            <Avatar
              alt="Remy Sharp"
              src={formData.imgb64 === "" ? logo : formData.imgb64}
              sx={{ width: 56, height: 56 }}
              style={{ alignSelf: "center" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload File
              <input type="file" onChange={convertToBase64} hidden />
            </Button>
          </Grid> */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="left"
                color="primary"
                style={{
                  borderBottom: "0.5px solid black",
                  marginBottom: "20px",
                  marginTop: "-50px",
                }}
              >
                <br />
                <br />
                Basic Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                marginTop: "-8px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    label="Select Date Of Birth"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                      let num = Number(newValue.$M);
                      console.log(num + 1);
                      let newval = "";
                      newval =
                        newValue.$D + "-" + (num + 1) + "-" + newValue.$y;
                      // console.log(newval);
                      handleDateChange(newval);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%", marginTop: "22px" }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ textAlign: "left" }}
                >
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.sex}
                  label="Sex"
                  name="sex"
                  onChange={handleChange}
                  fullWidth
                  required
                  align={"left"}
                  // sx={{ width: "90%" }}
                >
                  {/* Assuming grades are from 1 to 12 */}
                  {sex.map((index, i) => (
                    <MenuItem key={i + 1} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="left"
                color="primary"
                style={{
                  borderBottom: "0.5px solid black",
                  marginBottom: "20px",
                  marginTop: "-50px",
                }}
              >
                <br />
                <br />
                Educational Details
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Current CPI"
                name="currcpi"
                value={formData.currcpi}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Registration Number"
                name="regnumber"
                value={formData.regnumber}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                marginTop: "-8px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    label="Select Date of Enrollment"
                    value={value2}
                    onChange={(newValue) => {
                      setValue2(newValue);
                      handleEnrollmentChange(newValue.$y);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ textAlign: "left" }}
                >
                  Degree
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="deg"
                  value={formData.degree}
                  label="Degree"
                  name="degree"
                  onChange={onChangeDeg}
                  fullWidth
                  required
                  align={"left"}
                >
                  {/* Assuming grades are from 1 to 12 */}
                  {degree.map((index, i) => (
                    <MenuItem key={i + 1} value={index}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ textAlign: "left" }}
                >
                  UG Branch
                </InputLabel>
                <Select
                  disabled={ugval}
                  labelId="demo-simple-select-label"
                  id="ugb"
                  value={formData.branch}
                  label="Branch"
                  name="branch"
                  onChange={handleChange}
                  fullWidth
                  align={"left"}
                  required
                >
                  {/* Assuming grades are from 1 to 12 */}
                  {course.map((index, i) => (
                    <MenuItem key={i + 1} value={index} disabled={ugval}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ textAlign: "left" }}
                >
                  PG Branch
                </InputLabel>
                <Select
                  disabled={pgval}
                  labelId="demo-simple-select-label"
                  id="pgb"
                  value={formData.branch}
                  label="MTech Branch"
                  name="branch"
                  onChange={handleChange}
                  fullWidth
                  align={"left"}
                  required
                >
                  {/* Assuming grades are from 1 to 12 */}
                  {mcourse.map((index, i) => (
                    <MenuItem key={i + 1} value={index} disabled={pgval}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="10th Marks"
                name="tenth"
                value={formData.tenth}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="12th Marks"
                name="twelth"
                value={formData.twelth}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Current Backlogs"
                name="backlog"
                value={formData.backlog}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="10th School"
                name="tenthschool"
                value={formData.tenthschool}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="12th School"
                name="twelthschool"
                value={formData.twelthschool}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Hobbies"
                name="hobbies"
                value={formData.hobbies}
                onChange={handleChange}
                fullWidth
                sx={{ width: "90%" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Update Profile
          </Button>
        </form>
      </Paper>
      <br />
      <br />
      <br />
    </Container>
  );
}

export default EditProfile;
