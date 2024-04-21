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
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const AdminCompanies = () => {
  const [companies, setCompanies] = useState([]);
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

  const logCompanies = (AppliedCandidates) => {
    console.log(AppliedCandidates[0].Branch);
  };

  useEffect(() => {
    fetchCompanies();
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

  const CompanyArray = companies.map((company) => {
    const companyName = company.CompanyName;
    const JobLocation = company.JobLocation;
    const JobProfile = company.JobProfile;
    const ctc = company.ctc;
    const AppliedCandidates = company.AppliedCandidates;

    return (
      <>
        <Card key={company._id} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div" align="left">
              {companyName}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="left">
              {JobProfile}, {JobLocation}
            </Typography>

            <Typography variant="body2" align="left">
              CTC: {ctc} LPA
            </Typography>

            <Typography variant="body2" align="left">
              <br />
              <strong>Applied Candidates:</strong>
              <FormGroup>
                {AppliedCandidates.map((candidate) => (
                  <>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={`${candidate.FirstName} ${candidate.LastName}`}
                      onChange={() => {}}
                    />
                  </>
                ))}
              </FormGroup>
            </Typography>

            <Typography variant="body2" align="left">
              {/* Add more details as needed */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                logCompanies(AppliedCandidates);
              }}
            >
              Download Excel
            </Button>
          </CardActions>
        </Card>
        <br />
        <br />
      </>
    );
  });

  return (
    <Container sx={{ margin: "auto" }}>
      <Typography variant="h6">All Companies</Typography>
      <br />
      <Paper>
        <Grid>
          <Box sx={{ width: "100%", padding: "30px" }}>
            <Grid>
              <Grid>{CompanyArray}</Grid>
            </Grid>
          </Box>
        </Grid>
      </Paper>
      <br />
      <br />
    </Container>
  );
};

export default AdminCompanies;
