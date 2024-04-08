// Contact.js
import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

// Styled components for custom styling
const StyledCard = styled(Card)({
  minHeight: "19.0rem",
  position: "relative", // Add position relative to the card
  borderBottom: "2px solid #fd7e14", // Add border color to the bottom edge
});

const DividerStyled = styled(Divider)({
  position: "absolute",
  width: "100%",
  top: "4rem", // Position divider below the heading
  border: "1px solid ",
});

const rows = [
  {
    serialNo: "1.",
    name: "Mr. Swapnil Shinde",
    designation: "Industrial Liaison Officer",
    mobile: "+91-8669031505",
  },
  {
    serialNo: "2.",
    name: "Mr. Suhas Parab",
    designation: "Co-ordinator 1",
    mobile: "+91-9773563536",
  },
  {
    serialNo: "3.",
    name: "Mr. Yogesh Tambe",
    designation: "Co-ordinator 2",
    mobile: "+91-9082839155",
  },
  {
    serialNo: "4.",
    name: "Mr. Prakash M. Bait",
    designation: "Assistant Staff",
    mobile: "+91-1234567890",
  },
];

const tableCellStyle = {
  borderBottom: "1px solid rgba(224, 224, 224, 1)",
  borderRight: "1px solid rgba(224, 224, 224, 1)",
};

const Contact = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={10}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "justify" }}>
          <Typography
            variant="h5"
            color="primary"
            sx={{ pb: 1, pl: 3, textAlign: "left" }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={2} p={2}>
            <Grid item sm={2}></Grid>
            <Grid item sm={4}>
              <Paper elevation={4}>
                <StyledCard variant="outlined">
                  <Grid container direction="column" alignItems="center" p={3}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Training & Placement Cell
                    </Typography>
                    <DividerStyled /> {/* Divider positioned within the card */}
                    <Grid item container alignItems="center" mb={2}>
                      <Grid item xs={2} textAlign="center">
                        <PlaceIcon
                          sx={{ color: "#FF5722", verticalAlign: "middle" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          variant="body1"
                          sx={{ pt: 3, textAlign: "justify" }}
                        >
                          Veermata Jijabai Technological Institute (VJTI),
                          <br />
                          H. R. Mahajani Road,
                          <br />
                          Matunga (East), Mumbai 400019
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems="center" mb={2}>
                      <Grid item xs={2} textAlign="center">
                        <PhoneIcon
                          sx={{ color: "#FF5722", verticalAlign: "middle" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          variant="body1"
                          sx={{ pt: 2, textAlign: "justify" }}
                        >
                          +91-22-24198121
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems="center" mb={2}>
                      <Grid item xs={2} textAlign="center">
                        <EmailIcon
                          sx={{ color: "#FF5722", verticalAlign: "middle" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          variant="body1"
                          sx={{ pt: 2, textAlign: "justify" }}
                        >
                          tpo@vjti.ac.in
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </StyledCard>
              </Paper>
            </Grid>
            <Grid item sm={4}>
              <Paper elevation={4}>
                <StyledCard variant="outlined">
                  <Grid container direction="column" alignItems="center" p={3}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Dr. N. P. Gulhane
                    </Typography>
                    <DividerStyled />
                    <Grid item container alignItems="center" mb={2}>
                      <Grid item xs={2} textAlign="center">
                        <PersonIcon
                          sx={{ color: "#FF5722", verticalAlign: "middle" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          variant="body1"
                          sx={{ pt: 3, textAlign: "justify" }}
                        >
                          Professor In-charge,
                          <br />
                          Training & Placement Cell
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems="center" mb={2}>
                      <Grid item xs={2} textAlign="center">
                        <PhoneIcon
                          sx={{ color: "#FF5722", verticalAlign: "middle" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          variant="body1"
                          sx={{ pt: 2, textAlign: "justify" }}
                        >
                          +91-9322080056
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems="center" mb={2}>
                      <Grid item xs={2} textAlign="center">
                        <EmailIcon
                          sx={{ color: "#FF5722", verticalAlign: "middle" }}
                          fontSize="medium"
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography
                          variant="body1"
                          sx={{ pt: 2, textAlign: "justify" }}
                        >
                          tpo@vjti.ac.in
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </StyledCard>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="left" color="primary" sx={{ p: 2 }}>
              Staff – T & P Office
            </Typography>
          </Grid>
          <TableContainer
            component={Paper}
            style={{ width: "90%", margin: "auto" }}
            variant="outlined"
          >
            <Table
              style={{ fontSize: "0.850rem" }}
              sx={{ minWidth: 35 }}
              aria-label="placement statistics table"
            >
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#D3D3D3",
                  }}
                >
                  <TableCell
                    align="center"
                    width="10%"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid #d7d7d7",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      S. No.
                    </Typography>
                  </TableCell>
                  <TableCell
                    width="30%"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid #d7d7d7",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    width="30%"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid #d7d7d7",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Designation
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    width="30%"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid #d7d7d7",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Mobile No.
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="center" sx={tableCellStyle}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "semi bold" }}
                      >
                        {row.serialNo}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" sx={tableCellStyle}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "semi bold" }}
                      >
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "semi bold" }}
                      >
                        {row.designation}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" sx={tableCellStyle}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "semi bold" }}
                      >
                        {row.mobile}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
