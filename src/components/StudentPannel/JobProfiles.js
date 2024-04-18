import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Container,
  Button,
  CardContent,
  CardActions,
  Card,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";
import JobCard from "./JobCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const JobProfiles = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      navigate("/login");
    }
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = {
    Branch: "Enter Branch",
    CPI: "Enter current CPI",
    Gender: "Male",
  };
  const [credential, setCredentials] = useState(data);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/v1/fetchdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
    });
    const r = await response.json();
    // console.log(r.userData.firstName);
    setCredentials({
      Branch: r.userData.branch,
      CPI: r.userData.currcpi,
      Gender: r.userData.sex,
    });
  };
  const [jobs, setJobs] = useState([{}]);
  const fetchJobs = async () => {
    const response = await fetch("http://localhost:5000/api/v1/fetchjobdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
    });
    const r = await response.json();
    setJobs(r.jobData);
    // r.jobData.map(async (index) => {
    //   await setJobs([index, ...jobs]);
    //   console.log(index);
    //   console.log(jobs);
    // });
  };
  useEffect(() => {
    fetchJobs();
    fetchData();
  }, []);
  console.log(jobs);
  console.log(credential.Branch);
  const handleOnClick = (jobid) => {
    console.log("CLICKED");
    console.log(jobid);
  };
  const check = (
    cpi,
    eligibility,
    BranchAllowed,
    currBranch,
    lastDay,
    lastMonth,
    lastYear,
    jobid
  ) => {
    // console.log(cpi);
    const d = new Date();
    const currdate = d.getDate();
    console.log(currdate);
    console.log(lastDay);
    const currmonth = d.getMonth();
    const curryear = d.getFullYear();
    if (
      cpi >= eligibility &&
      BranchAllowed.includes(currBranch) &&
      lastDay - currdate >= 0 &&
      lastMonth - currmonth >= 0 &&
      lastYear - curryear >= 0
    )
      return (
        <Button
          size="small"
          onClick={() => {
            handleOnClick(jobid);
          }}
        >
          Apply Now
        </Button>
      );
    else {
      return (
        <Button size="small" disabled>
          Not Eligible
        </Button>
      );
    }
  };
  return (
    <Container sx={{ margin: "auto" }}>
      <Typography variant="h6">Job Profiles</Typography>
      <Paper>
        <Grid>
          {/* Tabs */}

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All Jobs" {...a11yProps(0)} />
                <Tab label="Applied Jobs" {...a11yProps(1)} />
              </Tabs>
            </Box>

            {/* Panel 1 */}

            <CustomTabPanel value={value} index={0}>
              <Grid>
                {/* Map Cards Here */}
                {jobs.length === 0 ? (
                  <>No Jobs to Display</>
                ) : (
                  jobs.map((i, idx) => {
                    return (
                      <>
                        <Card sx={{ minWidth: 275 }} key={idx}>
                          <CardContent>
                            <Typography
                              variant="h5"
                              component="div"
                              align="left"
                            >
                              {i.CompanyName}
                            </Typography>
                            <Typography
                              sx={{ mb: 1.5 }}
                              color="text.secondary"
                              align="left"
                            >
                              {i.JobProfile}, {i.JobLocation}
                            </Typography>
                            <Typography variant="body2" align="left">
                              Eligibility CPI: {i.mincpi}
                              <br />
                              CTC: {i.ctc} LPA
                              <br />
                              Eligible Branches:
                              {/* {i.BranchAllowed.map((x) => {
                                return <>x</>;
                              })} */}
                              <br />
                              Last Date to Apply: {i.LastDatetoApply}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Download JD</Button>
                            {check(
                              credential.CPI,
                              i.mincpi,
                              i.BranchAllowed,
                              credential.Branch,
                              i.lastDay,
                              i.lastMonth,
                              i.lastYear,
                              i._id
                            )}
                          </CardActions>
                        </Card>
                        <br />
                        <br />
                      </>
                    );
                  })
                )}
              </Grid>
            </CustomTabPanel>

            {/* Panel2 */}

            <CustomTabPanel value={value} index={1}>
              <AppliedJobs />
            </CustomTabPanel>
          </Box>
        </Grid>
      </Paper>
      <br />
      <br />
    </Container>
  );
};

export default JobProfiles;
