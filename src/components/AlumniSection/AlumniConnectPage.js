import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import AlumniCard from "./AlumniCard";
// import Profiles from "./Profiles";
import { Navigate, useNavigate } from "react-router-dom";

const AlumniConnectPage = () => {
  const navigate = useNavigate();
  const [Profiles, setProfile] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/v1/fetchallstudentdata`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          AuthToken: localStorage.getItem("AuthToken"),
        },
      }
    );
    const r = await response.json();
    const curryear = new Date().getFullYear();
    var b = r.students.filter(function (i) {
      return i.userType === 0 && i.enrollmentyear + 3 < curryear;
    });
    var c = [];
    b.map((i) => {
      const temp = {
        degree: i.degree,
        name: i.firstName + " " + i.lastName,
        jobTitle: i.JobProfile,
        company:
          i.placedCompany === "Not Placed" ? "Not Placed" : i.placedCompany,
        Branch: i.branch,
        passOutYear: i.enrollmentyear + 4,
        mobileNumber: i.phone,
        email: i.email,
        userProfilePic: require("./profile.png"),
        socialMediaLinks: {
          linkedin: "https://pbc-webdev.com",
          twitter: "https://pbc-webdev.com",
        },
      };
      c.push(temp);
    });
    setProfile(c);
    console.log(b);
  };
  console.log(Profiles);
  useEffect(() => {
    if (
      localStorage.getItem("AuthToken") &&
      localStorage.getItem("userType") == 0
    ) {
      fetchData();
    } else {
      navigate("/");
    }
  }, []);

  const handleSearch = () => {
    const results =
      Profiles.length === 0
        ? []
        : Profiles.filter((profile) => {
            const nameMatch =
              profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              searchTerm.trim() === "";

            const yearMatch =
              selectedYear.length === 0 ||
              selectedYear.includes(profile.passOutYear);

            const branchMatch =
              selectedBranch.length === 0 ||
              selectedBranch.includes(profile.Branch);

            const companyMatch =
              selectedCompanies.length === 0 ||
              selectedCompanies.includes(profile.company);

            // Check if any filter option is selected
            const anyFilterSelected =
              selectedYear.length > 0 ||
              selectedBranch.length > 0 ||
              selectedCompanies.length > 0;

            // Return true if any filter option is selected or if the name matches
            return (
              (anyFilterSelected &&
                nameMatch &&
                yearMatch &&
                branchMatch &&
                companyMatch) ||
              (!anyFilterSelected && nameMatch)
            );
          });
    setSearchResults(results);
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={10}>
        <Paper elevation={1} style={{ padding: "5px", textAlign: "justify" }}>
          <Typography
            variant="h5"
            color="primary"
            sx={{ pb: 1, pl: 3, textAlign: "left" }}
          >
            Alumni Connect
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              width: "90%",
              margin: "auto",
            }}
          >
            {/* Search Field and Filters */}
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                {/* Search Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <Button
                          variant="contained"
                          disableElevation
                          onClick={handleSearch}
                        >
                          Search
                        </Button>
                      ),
                    }}
                  />
                </Grid>
                {/* Filters */}
                <Grid item xs={12} sm={6} container spacing={2}>
                  <Grid item xs={4}>
                    <FormControl fullWidth size="small" variant="outlined">
                      <InputLabel id="year-passout-label">
                        Passout Year
                      </InputLabel>
                      <Select
                        labelId="year-passout-label"
                        id="year-passout"
                        multiple
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        label="Year of Passout"
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {[2023, 2022, 2021, 2020, 2019, 2018].map((year) => (
                          <MenuItem key={year} value={year}>
                            <Checkbox
                              checked={selectedYear.includes(year)}
                              color="primary"
                            />
                            <ListItemText primary={year} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth size="small" variant="outlined">
                      <InputLabel id="branch-label">Branch</InputLabel>
                      <Select
                        labelId="branch-label"
                        id="branch"
                        multiple
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        label="Branch"
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {[
                          "Computer Engineering",
                          "Information Technology",
                          "Electronics and Telecommunication Engineering",
                          "Electronics Engineering",
                          "Electrical Engineering",
                          "Mechanical Engineering",
                          "Civil Engineering",
                          "Production Engineering",
                          "Textile Engineering",
                          "Civil Engineering (with specialization in Construction Management)",
                          "Civil Engineering (with specialization in Environmental Engineering)",
                          "Civil Engineering (with specialization in Structural Engineering )",
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
                          "Project Management",
                          "Textile Technology",
                          "Defence Technology",
                        ].map((branch) => (
                          <MenuItem key={branch} value={branch}>
                            <Checkbox
                              checked={selectedBranch.includes(branch)}
                              color="primary"
                            />
                            <ListItemText primary={branch} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth size="small" variant="outlined">
                      <InputLabel id="company-tag-label">
                        Company Tag
                      </InputLabel>
                      <Select
                        labelId="company-tag-label"
                        id="company-tag"
                        multiple
                        value={selectedCompanies}
                        onChange={(e) => setSelectedCompanies(e.target.value)}
                        label="Company Tag"
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {["Google", "Facebook", "Microsoft", "Amazon"].map(
                          (company) => (
                            <MenuItem key={company} value={company}>
                              <Checkbox
                                checked={selectedCompanies.includes(company)}
                                color="primary"
                              />
                              <ListItemText primary={company} />
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Alumni Cards */}
            <Grid item xs={12}>
              <Typography variant="h6" pb={2} gutterBottom>
                Search Results
              </Typography>
              <Grid container spacing={3}>
                {searchResults.length === 0 && (
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      // sx={{ width: "100%" }}
                    >
                      No results found.
                    </Typography>
                  </Grid>
                )}
                {Profiles &&
                  searchResults.map((profile) => (
                    <AlumniCard key={profile.name} profile={profile} />
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AlumniConnectPage;
