import React, { useState } from "react";
import {
  Button,
  CardContent,
  CardActions,
  Card,
  Typography,
} from "@mui/material";
const JobCard = ({
  companyName,
  role,
  location,
  eligibility,
  ctc,
  cpi,
  skills,
  lastDate,
}) => {
  const check = (cpi, eligibility) => {
    console.log(cpi);
    if (cpi >= eligibility) return <Button size="small">Apply Now</Button>;
    else {
      return (
        <Button size="small" disabled>
          Not Eligible
        </Button>
      );
    }
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          {companyName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="left">
          {role}, {location}
        </Typography>
        <Typography variant="body2" align="left">
          Eligibility CPI: {eligibility}
          <br />
          CTC: {ctc} LPA
          <br />
          Required Skills: {skills}
          <br />
          Last Date to Apply: {lastDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Download JD</Button>
        {check(cpi, eligibility)}
      </CardActions>
    </Card>
  );
};

export default JobCard;
