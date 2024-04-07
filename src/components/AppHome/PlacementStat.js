import React from "react";
import {
  Grid,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

function PlacementStatistics() {
  // Array of objects containing PDF links and descriptions
  const placementReports = [
    {
      description: "Placement Report 2023-24",
      pdfLink:
        "https://vjti.ac.in/wp-content/uploads/2024/02/242020_Placement-Report-AY-2023-24-for-website-upload.pdf",
    },
    {
      description: "Placement Report 2022-23",
      pdfLink:
        "https://vjti.ac.in/wp-content/uploads/2024/02/240202_Final-Placement-2022-23-for-NIRF-2023-website-upload-1.pdf",
    },
    {
      description: "Placement Report 2021-22",
      pdfLink:
        "https://vjti.ac.in/wp-content/uploads/2023/06/230619_Placement-Report-for-B.Tech-MTechYear-2021-2022.pdf",
    },
    {
      description: "Placement Report 2020-21",
      pdfLink:
        "https://vjti.ac.in/wp-content/uploads/2023/06/230619_Placement-Report-for-B.Tech-MTech-Year-2020-2021.pdf",
    },
    {
      description: "Placement Report 2019-20",
      pdfLink:
        "https://vjti.ac.in/wp-content/uploads/2023/02/230217_Placement-report-2019-20.pdf",
    },
    {
      description: "Placement Report 2018-19",
      pdfLink: "https://vjti.ac.in/wp-content/uploads/2021/09/191204_17_G.pdf",
    },
    // Add more objects for other years as needed
  ];

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <Paper elevation={6} sx={{ p: 3 }}>
          <Typography
            variant="h5"
            color="primary"
            sx={{ pb: 2, pl: 3, textAlign: "left" }}
          >
            Placement Statistics
          </Typography>

          <TableContainer
            component={Paper}
            style={{ width: "80%", margin: "auto" }}
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
                    backgroundColor: "#cfe2ff",
                  }}
                >
                  <TableCell
                    align="center"
                    width="10%"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid #bacbe6",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      S. No.
                    </Typography>
                  </TableCell>
                  <TableCell
                    width="70%"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid #bacbe6",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    width="20%"
                    sx={{
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      borderRight: "1px solid #bacbe6",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      PDF Link
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {placementReports.map((report, index) => (
                  <TableRow key={index + 1}>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "semi bold" }}
                      >
                        {index + 1}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "semi bold" }}
                      >
                        {report.description}
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                        borderRight: "1px solid rgba(224, 224, 224, 1)",
                      }}
                    >
                      <a
                        href={report.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-danger"
                      >
                        <PictureAsPdfOutlinedIcon
                          sx={{ color: "#FF5722" }}
                          fontSize="medium"
                        />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Container>
  );
}

export default PlacementStatistics;
