import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Link,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import { styled } from "@mui/system";

// Define styles using styled
const StyledTable = styled(Table)({
  fontSize: "0.850rem !important",
  width: "90%",
  margin: "auto",
  border: "1px solid rgba(0, 0, 0, 0.1)", // Border color may need adjustment
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: "#f8f9fa", // Table header background color
});

const StyledTableCell = styled(TableCell)({
  textAlign: "center",
});
const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome to VJTI Placement Portal!!
          </Typography>
        </Grid>
        {/* Section 1 */}
        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" align="left" color="primary">
                  The Training & Placement cell is mainly responsible for:-
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3} sm={2} textAlign="center">
                      <DoneAllIcon color="success" fontSize="large" />
                    </Grid>
                    <Grid item xs={9} sm={10}>
                      <Typography variant="body1" sx={{ textAlign: "justify" }}>
                        Facilitating Industrial Training, mandatory for UG
                        (B.Tech.) curriculum.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={3} sm={2} textAlign="center">
                      <DoneAllIcon color="success" fontSize="large" />
                    </Grid>
                    <Grid item xs={9} sm={10}>
                      <Typography variant="body1" sx={{ textAlign: "justify" }}>
                        Inviting Companies/Organizations of repute for
                        placements of both UG and PG students.
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            {/* Section 2 */}

            <Typography variant="body1" sx={{ textAlign: "justify", mt: 2 }}>
              The T&amp;P cell collaborates with leading organizations for
              setting up internship and training program of students. The Office
              interacts with many companies/industries in the country, of which
              nearly 200 companies visit the campus for holding campus
              interviews. These organizations which approach the institute come
              under the purview of: Core Engineering Industries, IT &amp; IT
              enabled services, Manufacturing, Consultancy Firms, Investment
              &amp; Finance Companies, Management Organizations, R&amp;D
              laboratories.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify", mt: 2 }}>
              Job offers, dates of interviews, selection of candidates etc. are
              announced through the Training &amp; Placement Office.
            </Typography>
          </Paper>
        </Grid>

        {/* Section 3 */}
        <Grid item xs={7}>
          <Paper elevation={8} sx={{ p: 1.5 }}>
            <Typography variant="h6" color="primary" sx={{ pb: 3 }}>
              Placement
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              The placement season runs through the course of the year
              commencing the first week of August through to March.
              <Link
                href="https://vjti.ac.in/wp-content/uploads/2023/06/230612_-TPO-brochure-1.pdf"
                target="_blank"
                color="error"
              >
                Placement Brochure{" "}
                <PictureAsPdfIcon color="info" fontSize="medium" />
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={8} sx={{ p: 2.5 }}>
            <Typography variant="h6" color="primary" sx={{ pb: 3 }}>
              Institute Placement Policy
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              Click the PDF icon to view the placement policy.
              <PictureAsPdfIcon color="info" fontSize="medium" />
              <Link
                href="https://vjti.ac.in/wp-content/uploads/2023/07/230706_TPO-Policy-2.pdf"
                target="_blank"
                color="error"
              ></Link>
            </Typography>
          </Paper>
        </Grid>
        {/* Section 4 */}
        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 3 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ pb: 3, textAlign: "left" }}
            >
              Placement Procedure for Companies
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              <ul>
                <li>
                  The company should fill in the Job Notification Form
                  (JNF)/Internship Notification Form (INF) and submit it to the
                  Training and Placement Cell (TPC) portal. The JNF/INF serves
                  as an introduction of the job/internship profile for the
                  benefit of the candidates and also informs them of the
                  company's requirements.
                </li>
                <li>
                  The company will be allotted slots and dates for conducting
                  Pre-Placement Talk (PPT)/Written Test/Online Test, with a
                  request to confirm the same by a specified date. On failing to
                  do so, the allotted slot may be given to other companies on
                  their request. Request for any change in the slot can be
                  entertained subject to its availability.
                </li>
                <li>
                  The company can ask for the resumes of interested students and
                  has the liberty to shortlist them before the beginning of the
                  placement process.
                </li>
                For more detailed info click on the file icon
                <Link
                  href="../../../public/assets/docs/placement_process.pdf"
                  target="_blank"
                  color="error"
                >
                  <SimCardDownloadIcon color="info" fontSize="medium" />
                </Link>
              </ul>
            </Typography>
          </Paper>
        </Grid>
        {/* Section 5 */}
        <Grid item xs={12}>
          <Paper elevation={6} sx={{ p: 3 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ pb: 3, textAlign: "left" }}
            >
              Fliers
            </Typography>

            <TableContainer>
              <StyledTable aria-label="custom table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center" wdth="10%">
                      S. No.
                    </StyledTableCell>
                    <StyledTableCell align="center">Session</StyledTableCell>
                    <StyledTableCell align="center">
                      Placement Flier
                    </StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell align="center">1</StyledTableCell>
                    <StyledTableCell align="center">2023-24</StyledTableCell>
                    <StyledTableCell align="center">
                      <Link
                        href="https://vjti.ac.in/wp-content/uploads/2024/02/242020_Placement-Report-AY-2023-24-for-website-upload.pdf"
                        target="_blank"
                        color="error"
                      >
                        <SimCardDownloadIcon color="info" fontSize="medium" />
                      </Link>
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell align="center">2</StyledTableCell>
                    <StyledTableCell align="center">2022-23</StyledTableCell>
                    <StyledTableCell align="center">
                      <Link
                        href="https://vjti.ac.in/wp-content/uploads/2024/02/240202_Final-Placement-2022-23-for-NIRF-2023-website-upload-1.pdf"
                        target="_blank"
                        color="error"
                      >
                        <SimCardDownloadIcon color="info" fontSize="medium" />
                      </Link>
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </StyledTable>
            </TableContainer>
          </Paper>
        </Grid>
        {/* Additional sections can be added similarly */}
      </Grid>
    </Container>
  );
};

export default Home;
