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
  ListItemText,
  Select,
  MenuItem,
  FormControl,
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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import UploadIcon from "@mui/icons-material/Upload";

const AdminList2 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      navigate("/login");
    }
  });

  const [description, setDescription] = useState(""); // Step 1

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
    photo: "",
    description: "", // Include description field
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
    const formDataWithDescription = { ...formData, description };
    console.log(JSON.stringify(formDataWithDescription));
    const response = await fetch("http://localhost:5000/api/v1/addjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
      body: JSON.stringify(formDataWithDescription), // Use formDataWithDescription
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

  const handlePhotoChange = (photu) => {
    console.log(formData);
    setFormData((prevData) => ({
      ...prevData,
      photo: photu,
    }));
  };

  // Upload Photo
  const [photo, setPhoto] = useState("");
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    console.log(e.target.files);
    if (e.target.files[0].size >= 1500000) {
      window.alert("Size must be less than 1.5 MB");
    } else {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        setPhoto(reader.result);
        setFormData((prevData) => ({
          ...prevData,
          photo: reader.result,
        }));
      };
      reader.onerror = () => {
        console.log("ERROR");
      };
    }
    // console.log(photo);
    // handlePhotoChange(photo);
    // console.log(formData);
    // message.success("Logo Uploaded");
  }

  // const handleCheck = () => {
  //   // convertToBase64();
  //   console.log(photo);
  //   handlePhotoChange(photo);
  //   console.log(formData);
  //   message.success("Logo Uploaded");
  // };

  return (
    <Container component="main" maxWidth="70%" sx={{ width: "100%" }}>
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
          CREATE A JOB PROFILE
        </Typography>
        <br />

        <Grid item xs={12}>
          <Typography
            variant="h5"
            align="left"
            color="primary"
            style={{
              borderBottom: "0.5px solid black",
              marginBottom: "20px",
              marginTop: "-80px",
            }}
          >
            <br />
            <br />
            Enter Details
          </Typography>
        </Grid>
        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}> */}
            {/* <input type="file" accept="image/*" onChange={convertToBase64} />
            <button onClick={handleCheck}>Upload Image</button>
            <img height={100} width={100} alt="No Uploads" src={photo} />
            <br /> */}

            <Grid item xs={12} sm={4}>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  minHeight: "110px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6}>
                    <img
                      height={100}
                      width={100}
                      alt="Logo"
                      src={formData.photo}
                      style={{ border: "0.5px solid black", margin: "auto" }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} align="center">
                    <Button
                      variant="outlined"
                      startIcon={<UploadIcon />}
                      component="label"
                    >
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={convertToBase64}
                        hidden
                      />
                    </Button>
                    <br />
                    <br />

                    {/* <Button
                  variant="contained"
                  component="label"
                  onClick={handleCheck}
                >
                  Upload Logo
                </Button> */}
                  </Grid>
                </Grid>
              </div>
            </Grid>
            {/* </Grid> */}

            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Company Name"
                name="CompanyName"
                value={formData.CompanyName}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Job Location"
                name="JobLocation"
                value={formData.JobLocation}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <FormControl fullWidth required>
                  <InputLabel id="job-profile-label">Job Profile</InputLabel>
                  <Select
                    labelId="job-profile-label"
                    id="job-profile-select"
                    value={formData.JobProfile}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFormData((prevData) => ({
                        ...prevData,
                        JobProfile: value,
                      }));
                    }}
                    renderValue={(selected) => selected}
                  >
                    {jobtype.map((job, index) => (
                      <MenuItem key={index} value={job}>
                        <Checkbox checked={formData.JobProfile.includes(job)} />
                        {job}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="CTC"
                name="ctc"
                value={formData.ctc}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
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
                      newval =
                        newValue.$D + "-" + (num + 1) + "-" + newValue.$y;
                      // console.log(newval);
                      handleDateChange(newval);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
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
                Eligibility
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Minimum CPI"
                name="mincpi"
                value={formData.mincpi}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <FormControl fullWidth required>
                  <InputLabel id="degree-label">
                    Select Eligible Degrees:
                  </InputLabel>
                  <Select
                    labelId="degree-label"
                    id="degree-select"
                    multiple
                    value={formData.DegreeAllowed}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFormData((prevData) => ({
                        ...prevData,
                        DegreeAllowed: value,
                      }));
                    }}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {degree.map((course, index) => (
                      <MenuItem key={index} value={course}>
                        <Checkbox
                          checked={formData.DegreeAllowed.includes(course)}
                        />
                        {course}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <FormControl fullWidth>
                  <InputLabel id="branch-label">
                    Select Eligible Branches:
                  </InputLabel>
                  <Select
                    labelId="branch-label"
                    id="branch-select"
                    multiple
                    value={formData.BranchAllowed}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFormData((prevData) => ({
                        ...prevData,
                        BranchAllowed: value,
                      }));
                    }}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {course.map((branch, index) => (
                      <MenuItem key={index} value={branch}>
                        <Checkbox
                          checked={formData.BranchAllowed.includes(branch)}
                        />
                        {branch}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div style={{ width: "90%", margin: "auto" }}>
                <FormControl fullWidth>
                  <InputLabel id="mtech-branch-label">
                    Select Eligible Branches from MTech:
                  </InputLabel>
                  <Select
                    labelId="mtech-branch-label"
                    id="mtech-branch-select"
                    multiple
                    value={formData.MTechBranchAllowed}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFormData((prevData) => ({
                        ...prevData,
                        MTechBranchAllowed: value,
                      }));
                    }}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {mcourse.map((branch, index) => (
                      <MenuItem key={index} value={branch}>
                        <Checkbox
                          checked={formData.MTechBranchAllowed.includes(branch)}
                        />
                        {branch}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Description"
                name="description"
                value={description} // Step 2
                onChange={(e) => setDescription(e.target.value)} // Step 3
                multiline
                rows={4} // Adjust rows as needed
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
    </Container>
  );
};

export default AdminList2;
