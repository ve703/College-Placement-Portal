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
  Avatar,
} from "@mui/material";
import CsvDownloadButton from "react-json-to-csv";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ExportJsonCsv } from "react-export-json-csv";
import Modal from "@mui/material/Modal";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "./jobdefault.png";
import DeleteIcon from "@mui/icons-material/Delete";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const AdminCompanies = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const fetchCompanies = async () => {
    const response = await fetch("http://localhost:5000/api/v1/fetchjobdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
    });
    const r = await response.json();
    setCompanies(r.jobData);
    console.log(r.jobData);
    console.log(companies);
  };
  useEffect(() => {
    if (localStorage.getItem("AuthToken")) {
      if (localStorage.getItem("userType") == 1) {
        fetchCompanies();
      } else {
        navigate("/candidate");
      }
    } else {
      navigate("/");
    }
  }, []);

  //   const CompanyArray = companies.map((company) => {

  //     // <Typography key={company._id}>{company.CompanyName}</Typography>

  //     const CompanyName = company.CompanyName;

  //     return (
  //         <>
  //         <Typography>This</Typography>
  //         </>
  //     )

  //   );
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const headers2 = [
    {
      key: "CompanyName",
      name: "Company Name",
    },
    {
      key: "JobProfile",
      name: "Job Profile",
    },
    {
      key: "ctc",
      name: "CTC",
    },
  ];
  const headers = [
    {
      key: "Degree",
      name: "Degree",
    },
    {
      key: "FirstName",
      name: "First Name",
    },
    {
      key: "LastName",
      name: "Last Name",
    },
    {
      key: "Branch",
      name: "Branch",
    },
    {
      key: "CPI",
      name: "CPI",
    },
    {
      key: "Gender",
      name: "Gender",
    },
    {
      key: "phone",
      name: "phone",
    },
    {
      key: "regnumber",
      name: "regnumber",
    },
  ];
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [offered, setOffered] = useState([]);
  const CompanyArray = companies.map((company) => {
    const job_id = company._id;
    var processCompleted = company.processCompleted;
    const companyName = company.CompanyName;
    const JobLocation = company.JobLocation;
    const JobProfile = company.JobProfile;
    const ctc = company.ctc;
    const AppliedCandidates = company.AppliedCandidates;
    const photo = company.photo;
    // console.log(processCompleted);
    console.log(job_id);
    const logStudents = async (e, jobid) => {
      e.preventDefault();
      console.log(jobid);
      setClicked(true);
      console.log(JSON.stringify(offered));
      const response = await fetch(
        `http://localhost:5000/api/v1/offerjob/${jobid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            AuthToken: localStorage.getItem("AuthToken"),
          },
          body: JSON.stringify(offered),
        }
      );
      const r = await response.json();
      console.log(r);
      window.location.reload();
    };
    const delJob = async (jobid) => {
      const response = await fetch(
        `http://localhost:5000/api/v1/deljob/${jobid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            AuthToken: localStorage.getItem("AuthToken"),
          },
        }
      );
      const r = await response.json();
      console.log(r);
      console.log(jobid);
      window.location.reload();
    };
    const handleonClick = (e, candidate) => {
      e.preventDefault();
      var idx = offered.indexOf(candidate);
      if (idx == -1) {
        setOffered((prevData) => [...prevData, candidate]);
      } else {
        var b = offered.filter((e) => e !== candidate);
        setOffered(b);
      }
      console.log(offered);
    };
    return (
      <>
        <Grid item key={company._id} xs={12} sm={6}>
          <Card
            sx={{
              minWidth: 275,
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              margin: "10px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              },
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  {photo ? (
                    <img
                      height={80}
                      width={80}
                      alt="Logo"
                      src={photo}
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "0.5px solid black",
                        overflow: "hidden",
                      }}
                    />
                  ) : (
                    <Avatar
                      height={80}
                      width={80}
                      src={logo}
                      variant="rounded"
                      alt="LogoAlt"
                      sx={{
                        width: 80,
                        height: 80,
                        border: "0.5px solid black",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <BusinessCenterIcon
                        sx={{
                          width: 60,
                          height: 60,
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    </Avatar>
                  )}
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Typography variant="h5" component="div" align="left">
                    {companyName}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    align="left"
                  >
                    <WorkIcon style={{ marginBottom: "-4px" }} /> {JobProfile}
                    <br />
                    <LocationOnIcon style={{ marginBottom: "-4px" }} />{" "}
                    {JobLocation}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" align="left">
                    CTC: {ctc} LPA
                  </Typography>
                  <Typography variant="body2" align="left">
                    <strong>Applied Candidates:</strong>
                    <FormGroup>
                      {AppliedCandidates.map((candidate, idx) => (
                        <FormControlLabel
                          key={idx}
                          control={<Checkbox key={idx} />}
                          label={`${candidate["FirstName"]} ${candidate["LastName"]}`}
                          onChange={(e) => {
                            handleonClick(e, candidate.id);
                            console.log(candidate);
                          }}
                        />
                      ))}
                    </FormGroup>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              {AppliedCandidates.length === 0 ? (
                <>No one applied</>
              ) : (
                <ExportJsonCsv
                  headers={headers}
                  items={AppliedCandidates}
                  fileTitle={companyName + " " + JobProfile}
                  style={{
                    color: "black",
                    borderRadius: "20px",
                    fontWeight: 600,
                    fontFamily: "Roboto",
                    border: "hidden",
                    backgroundColor: "transparent",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                >
                  Download Data
                </ExportJsonCsv>
              )}
              {processCompleted === true ? (
                <Button size="small" disabled>
                  Process Completed
                </Button>
              ) : (
                <Button
                  size="small"
                  variant="outlined"
                  disabled={clicked}
                  onClick={(e) => {
                    logStudents(e, job_id);
                  }}
                >
                  Confirm Offers
                </Button>
              )}
              <Button
                size="small"
                variant="outlined"
                disabled={clicked}
                startIcon={<DeleteIcon />}
                onClick={(e) => {
                  delJob(job_id);
                }}
              >
                Delete Jobs
              </Button>
              {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Do you want to make final offers to selected companies.
                  (NOTE:You will not be able to redo this for this job)
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Button
                    disabled={clicked}
                    onClick={(e) => {
                      logStudents(e, job_id);
                    }}
                  >
                    Offer Job
                  </Button>
                </Typography>
              </Box>
            </Modal> */}
              {/* <CsvDownloadButton data={AppliedCandidates} /> */}
              {/* <Button
              size="small"
              onClick={() => {
                logCompanies(AppliedCandidates);
              }}
            >
              Download Excel
            </Button> */}
            </CardActions>
          </Card>
          <br />
        </Grid>
      </>
    );
  });

  return (
    <Container
      sx={{ margin: "auto", boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}
    >
      <Typography variant="h6">All Companies</Typography>
      <br />
      <Typography variant="h6">
        <ExportJsonCsv
          headers={headers2}
          items={companies}
          fileTitle={"Currentyear_Companydata"}
          style={{
            color: "black",
            borderRadius: "20px",
            fontWeight: 600,
            fontFamily: "Roboto",
            border: "hidden",
            backgroundColor: "transparent",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Download Company Data
        </ExportJsonCsv>
      </Typography>
      <Paper>
        <Grid>
          <Box sx={{ width: "100%", padding: "30px" }}>
            <Grid container spacing={2}>
              {CompanyArray.length !== 0 ? CompanyArray : <>No jobs yet</>}
            </Grid>
          </Box>
        </Grid>
      </Paper>
      <br />
    </Container>
  );
};

export default AdminCompanies;
