import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Container,
  CardActionArea,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Card,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import JobCard from "./JobCard";

const AppliedJobs = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {/* Map Cards Here 1 */}

          <JobCard
            companyName={"Gada Electromics"}
            role={"Manager"}
            location={"Goregaon"}
            eligibility={"5"}
            ctc={"5 lpa"}
            skills={"Excellent English"}
            lastDate={"15-04-2024"}
          />
        </Grid>

        <br />
        <br />

        <Grid item xs={12} sm={6}>
          {/* Map Cards Here 1 */}

          <JobCard
            companyName={"Gada Electromics"}
            role={"Manager"}
            location={"Goregaon"}
            eligibility={"5"}
            ctc={"5 lpa"}
            skills={"Excellent English"}
            lastDate={"15-04-2024"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AppliedJobs;
