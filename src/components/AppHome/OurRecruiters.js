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
} from "@mui/material";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

import VJTI_TPO from "../../assets/images/VJTI_TPO.jpeg";
const RecruitersPage = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={10}>
        <Paper elevation={3} style={{ padding: "20px", textAlign: "justify" }}>
          <Typography
            variant="h5"
            color="primary"
            sx={{
              pb: 1,
              pl: 3,
              textAlign: "left",
              borderBottom: "0.5px solid black",
            }}
          >
            Our Recruiters
          </Typography>
          <Table
            sx={{
              width: "90%",
              margin: "auto",
            }}
            aria-label="Our Recruiters Table"
          >
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <img
                    src={VJTI_TPO}
                    alt="Our Recruiters"
                    style={{ width: "100%" }}
                  />
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ textAlign: "right", pr: 3 }}
                    >
                      For more information, click on the PDF icon
                      <Link
                        href="https://vjti.ac.in/wp-content/uploads/2023/05/Comapny-name-list-1.pdf"
                        target="_blank"
                        color="error"
                        sx={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        <PictureAsPdfOutlinedIcon
                          sx={{ color: "#FF5722" }}
                          fontSize="medium"
                        />
                      </Link>
                    </Typography>
                  </Grid>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RecruitersPage;
