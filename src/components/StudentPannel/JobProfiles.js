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
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";
import JobCard from "./JobCard";
import { message } from "antd";
import logo from "./profiledb.png";
import WorkIcon from "@mui/icons-material/Work";
import PlaceIcon from "@mui/icons-material/Place";

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
  const [clicked, setClicked] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = {
    email: "Set Email",
    id: "Set ID",
    Branch: "Enter Branch",
    CPI: "Enter current CPI",
    Gender: "Male",
    "Date of birth": "Enter DOB",
    "First Name": "Enter First Name",
    "Last Name": "Enter last Name",
    phone: "Enter Phone number",
    regnumber: "Enter Registration number",
    Degree: "Enter Degree",
    placed: false,
    placedCompanyid: "Not placed",
    jobOffers: 0,
    eligibleArr: [],
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
    console.log(r);
    // console.log(r.userData.firstName);
    setCredentials({
      email: r.userData.email,
      Degree: r.userData.degree,
      id: r.userData._id,
      Branch: r.userData.branch,
      CPI: r.userData.currcpi,
      Gender: r.userData.sex,
      "Date of birth": r.userData.dob,
      FirstName: r.userData.firstName,
      LastName: r.userData.lastName,
      phone: r.userData.phone,
      regnumber: r.userData.regnumber,
      placed: r.userData.placed,
      placedCompanyid: r.userData.placedCompanyid,
      eligibleArr: r.userData.eligibleArr,
      jobOffers: r.userData.jobOffers,
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
  const handleOnClick = async (jobid) => {
    setClicked(true);
    console.log(JSON.stringify(credential));
    const response = await fetch(
      `http://localhost:5000/api/v1/applyjob/${jobid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          AuthToken: localStorage.getItem("AuthToken"),
        },
        body: JSON.stringify(credential),
      }
    );
    const r = await response.json();

    console.log("CLICKED");
    console.log(jobid);
  };
  const OfferedOnCLick = async (companyName, jobid, currctc) => {
    localStorage.setItem("Company", companyName);
    const data = {
      currctc: currctc,
      placedCompanyid: jobid,
      placedCompany: companyName,
    };
    const response = await fetch(
      `http://localhost:5000/api/v1/placestudent/${credential.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          AuthToken: localStorage.getItem("AuthToken"),
        },
        body: JSON.stringify(data),
      }
    );
    const r = await response.json();
    if (r.msgType === "success") {
      message.success(r.msg);
    } else {
      message.warning("Encountered Error");
    }
    navigate("/interview-exp");
  };
  const check = (
    cpi,
    eligibility,
    BranchAllowed,
    currBranch,
    lastDay,
    lastMonth,
    lastYear,
    jobid,
    AppliedCandidates,
    processCompleted,
    OfferedCandidates,
    CompanyName,
    DegreeAllowed,
    MTechBranchAllowed,
    currctc
  ) => {
    // console.log(cpi);
    const d = new Date();
    const currdate = d.getDate();
    // console.log(currdate);
    // console.log(lastDay);
    const currmonth = d.getMonth() + 1;
    console.log(AppliedCandidates);
    const curryear = d.getFullYear();
    // console.log(
    //   (DegreeAllowed.includes(credential.Degree) &&
    //     BranchAllowed.includes(currBranch)) ||
    //     (MTechBranchAllowed.includes(currBranch) &&
    //       DegreeAllowed.includes(credential.Degree))
    // );
    if (credential.placed === true) {
      if (jobid == credential.placedCompanyid) {
        return (
          <Button size="small" disabled>
            Offer Accepted
          </Button>
        );
      }
      if (credential.jobOffers >= 2) {
        return (
          <Button size="small" disabled>
            2 Offers already Accepted
          </Button>
        );
      }
      if (currctc <= 12) {
        if (
          credential.eligibleArr[1] == true ||
          credential.eligibleArr[2] == true
        ) {
          return (
            <Button size="small" disabled>
              Placed in higher job profile
            </Button>
          );
        }
        if (credential.eligibleArr[0] == true) {
          return (
            <Button size="small" disabled>
              1 job offer in this profile
            </Button>
          );
        }
      }
      // if(jobctc<=12 ){
      //   if(arr[1]== true || arr[2]== true){
      //     placed in higher job profile
      //   }
      if (currctc > 12 && currctc <= 40) {
        if (credential.eligibleArr[1] == true) {
          return (
            <Button size="small" disabled>
              1 job offer in this profile
            </Button>
          );
        }
        if (credential.eligibleArr[2] == true) {
          return (
            <Button size="small" disabled>
              Placed in higher job profile
            </Button>
          );
        }
      }

      // }
      // if(12<jobctc<=40){
      //   if(arr[2]==true){
      //     placed in higher job profile
      //   }
      //   if(arr[1]==true){
      //     1 job offer in this job profile
      //   }
      // }
      // if(jobctc>40){
      //   if(arr[2]==true){
      //     1 job offer in this job profile
      //   }
      // }
      if (currctc > 40) {
        if (credential.eligibleArr[2] == true) {
          return (
            <Button size="small" disabled>
              1 Job offer in this profile
            </Button>
          );
        }
      }
      if (processCompleted === true) {
        if (OfferedCandidates.includes(credential.id)) {
          return (
            <Button
              size="small"
              onClick={() => {
                OfferedOnCLick(CompanyName, jobid, currctc);
              }}
            >
              Job Offered
            </Button>
          );
        } else {
          return (
            <Button size="small" disabled>
              Job not Offered(Recruitment Process Over)
            </Button>
          );
        }
      } else if (processCompleted === false) {
        if (
          AppliedCandidates &&
          AppliedCandidates.some((id) => id.id === credential.id)
        ) {
          console.log("HERE" + CompanyName);
          return (
            <Button size="small" disabled>
              Applied
            </Button>
          );
        } else {
          if (
            cpi >= eligibility &&
            ((DegreeAllowed.includes(credential.Degree) &&
              BranchAllowed.includes(currBranch)) ||
              (MTechBranchAllowed.includes(currBranch) &&
                DegreeAllowed.includes(credential.Degree)) ||
              (DegreeAllowed.includes("MCA") && credential.Degree === "MCA"))
          ) {
            var GivenDate1 = "2018-02-22";
            var GivenDate = lastYear + "-" + lastMonth + "-" + lastDay;
            var CurrentDate = new Date();
            GivenDate = new Date(GivenDate);
            if (CurrentDate <= GivenDate) {
              return (
                <Button
                  size="small"
                  disabled={clicked}
                  onClick={() => {
                    handleOnClick(jobid);
                  }}
                >
                  Apply Now
                </Button>
              );
            } else {
              return (
                <Button size="small" disabled>
                  Deadline missed
                </Button>
              );
            }
          } else {
            return (
              <Button size="small" disabled>
                Not Eligible
              </Button>
            );
          }
        }
      }
      return <Button size="small">TESTING</Button>;
      // if (jobid == credential.placedCompanyid) {
      //   return (
      //     <Button size="small" disabled>
      //       Offer Accepted
      //     </Button>
      //   );
      // } else {
      //   return (
      //     <Button size="small" disabled>
      //       Not Eligible
      //     </Button>
      //   );
      // }
    } else {
      if (processCompleted === true) {
        if (OfferedCandidates.includes(credential.id)) {
          return (
            <Button
              size="small"
              onClick={() => {
                OfferedOnCLick(CompanyName, jobid);
              }}
            >
              Job Offered
            </Button>
          );
        } else {
          return (
            <Button size="small" disabled>
              Job not Offered(Recruitment Process Over)
            </Button>
          );
        }
      } else if (processCompleted === false) {
        if (
          AppliedCandidates &&
          AppliedCandidates.some((id) => id.id === credential.id)
        ) {
          console.log("HERE" + CompanyName);
          return (
            <Button size="small" disabled>
              Applied
            </Button>
          );
        } else {
          if (
            cpi >= eligibility &&
            ((DegreeAllowed.includes(credential.Degree) &&
              BranchAllowed.includes(currBranch)) ||
              (MTechBranchAllowed.includes(currBranch) &&
                DegreeAllowed.includes(credential.Degree)) ||
              (DegreeAllowed.includes("MCA") && credential.Degree === "MCA"))
          ) {
            var GivenDate1 = "2018-02-22";
            var GivenDate = lastYear + "-" + lastMonth + "-" + lastDay;
            var CurrentDate = new Date();
            GivenDate = new Date(GivenDate);
            if (CurrentDate <= GivenDate) {
              return (
                <Button
                  size="small"
                  disabled={clicked}
                  onClick={() => {
                    handleOnClick(jobid);
                  }}
                >
                  Apply Now
                </Button>
              );
            } else {
              return (
                <Button size="small" disabled>
                  Deadline missed
                </Button>
              );
            }
          } else {
            return (
              <Button size="small" disabled>
                Not Eligible
              </Button>
            );
          }
        }
      }
    }
    // if (processCompleted === true && credential.placed !== true) {
    //   return (
    //     <Button size="small" disabled>
    //       Job Offer Process Completed
    //     </Button>
    //   );
    // }
    // if (credential.placed) {
    //   return <Button disabled>Job Offered Accepted</Button>;
    // }
    // if (
    //   AppliedCandidates &&
    //   AppliedCandidates.some((id) => id.id === credential.id) &&
    //   !credential.placed
    // ) {
    //   if (
    //     processCompleted === true &&
    //     OfferedCandidates.includes(credential.id)
    //   ) {
    //     return (
    //       <Button
    //         size="small"
    //         onClick={() => {
    //           OfferedOnCLick(CompanyName);
    //         }}
    //       >
    //         Job Offered
    //       </Button>
    //     );
    //   } else if (
    //     processCompleted === true &&
    //     !OfferedCandidates.includes(credential.id)
    //   ) {
    //     return (
    //       <Button size="small" disabled>
    //         Not Offered
    //       </Button>
    //     );
    //   } else if (processCompleted === false) {
    //     return (
    //       <Button size="small" disabled>
    //         Applied
    //       </Button>
    //     );
    //   }
    // } else if (
    //   cpi >= eligibility &&
    //   ((DegreeAllowed.includes(credential.Degree) &&
    //     BranchAllowed.includes(currBranch)) ||
    //     (MTechBranchAllowed.includes(currBranch) &&
    //       DegreeAllowed.includes(credential.Degree)) ||
    //     (DegreeAllowed.includes("MCA") && credential.Degree === "MCA"))
    // )
    //   if (lastYear - curryear >= 0 && lastMonth - currmonth >= 0) {
    //     if (lastYear - curryear > 0 || lastMonth - currmonth > 0) {
    //       return (
    //         <Button
    //           size="small"
    //           disabled={clicked}
    //           onClick={() => {
    //             handleOnClick(jobid);
    //           }}
    //         >
    //           Apply Now
    //         </Button>
    //       );
    //     } else if (lastMonth - currmonth == 0 && lastDay - currdate >= 0) {
    //       return (
    //         <Button
    //           size="small"
    //           onClick={() => {
    //             handleOnClick(jobid);
    //           }}
    //         >
    //           Apply Now
    //         </Button>
    //       );
    //     } else {
    //       return (
    //         <Button size="small" disabled>
    //           Deadline to Apply exceeded
    //         </Button>
    //       );
    //     }
    //   } else {
    //     return (
    //       <Button size="small" disabled>
    //         Not Eligible
    //       </Button>
    //     );
    //   }
    // else {
    //   return (
    //     <Button size="small" disabled>
    //       Not Eligible
    //     </Button>
    //   );
    // }
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
                            <Avatar alt="Cindy Baker" src={logo} />
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
                              <WorkIcon /> {i.JobProfile}
                            </Typography>
                            <Typography
                              sx={{ mb: 1.5 }}
                              color="text.secondary"
                              align="left"
                            >
                              <PlaceIcon /> {i.JobLocation}
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
                              Last Date to Apply:
                              {i.lastDay + "/" + i.lastMonth + "/" + i.lastYear}
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
                              i._id,
                              i.AppliedCandidates,
                              i.processCompleted,
                              i.OfferedCandidates,
                              i.CompanyName,
                              i.DegreeAllowed,
                              i.MTechBranchAllowed,
                              i.ctc
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
