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
  });
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [value2, setValue2] = useState(dayjs("2022-04-17"));

  const sex = ["Male", "Female", "Others"];

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
    <Container component="main" maxWidth="xs">
      {loading && (
        <div className="spinner">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}

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
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
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

          <Grid item xs={12}>
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
                    newval = newValue.$D + "-" + (num + 1) + "-" + newValue.$y;
                    // console.log(newval);
                    handleDateChange(newval);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Current CPI"
              name="currcpi"
              value={formData.currcpi}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Registration Number"
              name="regnumber"
              value={formData.regnumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
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
            >
              {/* Assuming grades are from 1 to 12 */}
              {sex.map((index, i) => (
                <MenuItem key={i + 1} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ textAlign: "left" }}
            >
              Branch
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
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
                <MenuItem key={i + 1} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
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
    </Container>
  );
}

export default EditProfile;
