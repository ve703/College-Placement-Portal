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
  TextareaAutosize,
  Checkbox, // Import Checkbox
  ListItemText,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function AdminList() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      navigate("/admin-list");
    }
  });
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    branch: "",
    currcpi: "",
    regnumber: "",
    phone: "",
    enrollmentyear: "",
    additionalInfo: "",
    package: "",
  });

  const [value2, setValue2] = useState(dayjs("2024-04-20"));

  const interests = [
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

  const course = [
    "Software Engineer",
    "Analyst",
    "Consulting",
    "Core",
    "Finance",
    "Others",
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
          <WorkOutlineIcon />
        </Avatar>
      </Box>

      <Typography component="h1" variant="h5" align="center" gutterBottom>
        CREATE A JOB PROFILE
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Additional Information"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              multiline // 3. Make the textarea multiline
              rows={4} // 4. Define the number of rows
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Select Date Of Campus Visit"
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
            <TextField
              variant="outlined"
              label="CPI Criteria"
              name="cpiCriteria"
              value={formData.cpiCriteria}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <InputLabel
              id="demo-multiple-checkbox-label"
              sx={{ textAlign: "left" }}
            >
              Eligible Streams
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple // Enable multiple selection
              value={formData.interests} // Use an array to store selected values
              onChange={handleChange} // Handle changes
              fullWidth
              renderValue={(selected) => selected.join(", ")} // Render selected values
            >
              {/* {interests.map((interest) => (
            <MenuItem key={interest} value={interest}>
              <Checkbox checked={formData.interests.indexOf(interest) > -1} /> {/* Checkbox for each option */}
              {/* <ListItemText primary={interest} /> */}
              {/* </MenuItem> */}
              {/* ))}  */}
              <MenuItem>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => {
                        console.log("abc");
                      }}
                      name={interests[0]}
                    />
                  }
                  label={interests[0]}
                />
                ;
              </MenuItem>
              ;
            </Select>
          </Grid>

          <Grid item xs={12}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ textAlign: "left" }}
            >
              Type Of Company
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
              {interests.map((index, i) => (
                <MenuItem key={i + 1} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Package"
              name="package"
              type="number" // Set the type to "number"
              value={formData.package}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="HR Contact Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
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
          Create Job
        </Button>
      </form>
    </Container>
  );
}

export default AdminList;
