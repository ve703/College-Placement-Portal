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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const AdminList2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      navigate("/login");
    }
  });

  const [formData, setFormData] = useState({
    CompanyName: "",
    JobLocation: "",
    BranchAllowed: [],
    MTechBranchAllowed: [],
    DegreeAllowed: [],
    mincpi: "",
    JobProfile: "",
    dov: "",
    ctc: "",
    lastDay: 0,
    lastMonth: 0,
    lastYear: 0,
  });

  const [loading, setLoading] = useState(false);
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
  const jobtype = [
    "Software Development",
    "Core",
    "Analytics",
    "Consulting",
    "Finance",
    "Marketing/Sales",
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

  const [value2, setValue2] = useState(dayjs("2022-04-17"));
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnrollmentChange = (lastyear, lastmonth, lastday) => {
    setFormData((prevData) => ({
      ...prevData,
      lastYear: lastyear,
      lastMonth: lastmonth + 1,
      lastDay: lastday,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    const response = await fetch("http://localhost:5000/api/v1/addjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
      body: JSON.stringify(formData),
    });
    const r = await response.json();
    console.log(r);
    if (r.msgType === "success") {
      message.success("job Added");
    } else {
      message.warning("Encountered Error");
    }
  };
  const handleDateChange = (date) => {
    console.log(date);
    setFormData((prevData) => ({
      ...prevData,
      dov: date,
    }));
  };
  const handleOnChange = (branch) => {
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      BranchAllowed: prevData.BranchAllowed.includes(branch)
        ? prevData.BranchAllowed.filter((c) => c !== branch)
        : [...prevData.BranchAllowed, branch],
    }));
  };
  const handleOnChangeDegree = (branch) => {
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      DegreeAllowed: prevData.DegreeAllowed.includes(branch)
        ? prevData.DegreeAllowed.filter((c) => c !== branch)
        : [...prevData.DegreeAllowed, branch],
    }));
  };
  const handleOnChangeMTech = (branch) => {
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      MTechBranchAllowed: prevData.MTechBranchAllowed.includes(branch)
        ? prevData.MTechBranchAllowed.filter((c) => c !== branch)
        : [...prevData.MTechBranchAllowed, branch],
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5" align="center" gutterBottom>
        CREATE A JOB PROFILE
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Company Name"
              name="CompanyName"
              value={formData.CompanyName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Job Location"
              name="JobLocation"
              value={formData.JobLocation}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Minimum CPI"
              name="mincpi"
              value={formData.mincpi}
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
              Job Profile
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.JobProfile}
              label="Job profile"
              name="JobProfile"
              onChange={handleChange}
              fullWidth
              required
              align={"left"}
            >
              {/* Assuming grades are from 1 to 12 */}
              {jobtype.map((index, i) => (
                <MenuItem key={i + 1} value={index}>
                  {index}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="CTC"
              name="ctc"
              value={formData.ctc}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Select Date Of Visit"
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Deadline to apply"
                  value={value2}
                  onChange={(newValue) => {
                    setValue2(newValue);
                    handleEnrollmentChange(
                      newValue.$y,
                      newValue.$M,
                      newValue.$D
                    );
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            Select Eligible Degrees:
            <FormGroup>
              {degree.map((course, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox />}
                  label={course}
                  onChange={() => {
                    handleOnChangeDegree(course);
                  }}
                />
              ))}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            Select Eligible Branches:
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Computer Engineering"
                onChange={() => {
                  handleOnChange("Computer Engineering");
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Information Technology"
                onChange={() => {
                  handleOnChange("Information Technology");
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Electronics and Telecommunication Engineering"
                onChange={() => {
                  handleOnChange(
                    "Electronics and Telecommunication Engineering"
                  );
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Electronics Engineering"
                onChange={() => {
                  handleOnChange("Electronics Engineering");
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Electrical Engineering"
                onChange={() => {
                  handleOnChange("Electrical Engineering");
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Mechanical Engineering"
                onChange={() => {
                  handleOnChange("Mechanical Engineering");
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Civil Engineering"
                onChange={() => {
                  handleOnChange("Civil Engineering");
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Production Engineering"
                onChange={() => {
                  handleOnChange("Production Engineering");
                }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Textile Engineering"
                onChange={() => {
                  handleOnChange("Textile Engineering");
                }}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            Select Eligible Branches From MTech:
            <FormGroup>
              {mcourse.map((course, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox />}
                  label={course}
                  onChange={() => {
                    handleOnChangeMTech(course);
                  }}
                />
              ))}
            </FormGroup>
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
};

export default AdminList2;
