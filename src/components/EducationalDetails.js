import React from "react";
import sample_profile from "./sample_profile.jpg";

import Box from "@mui/material/Box";
import {
  Avatar,
  // ListItem,
  Stack,
  // List,
  // ListItemText,
  // ListItemButton,
  Divider,
} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

let theme = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    body1: {
      fontWeight: 100,
      fontSize: 25,
    },
    subtitle1: {
      fontSize: 10,
      fontStyle: "italic",
    },
  },
});
theme = responsiveFontSizes(theme);

function createData(
  Certificates,
  Specialization,
  Institute,
  PassingYear,
  BoardUniversity,
  Percentage
) {
  return {
    Certificates,
    Specialization,
    Institute,
    PassingYear,
    BoardUniversity,
    Percentage,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 100),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 100),
  createData("Eclair", 262, 16.0, 24, 6.0, 100),
  createData("Cupcake", 305, 3.7, 67, 4.3, 100),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 100),
];

function createData1(Semester, Backlogs, PassingYear, Percentage) {
  return { Semester, Backlogs, PassingYear, Percentage };
}

const rows1 = [
  createData1("First-Semester", 159, 6.0, 24, 4.0, 100),
  createData1("Second-Semester", 237, 9.0, 37, 4.3, 100),
  createData1("Third-Semester", 262, 16.0, 24, 6.0, 100),
  createData1("Fourth-Semister", 305, 3.7, 67, 4.3, 100),
  createData1("Fifth-Semestre", 356, 16.0, 49, 3.9, 100),
  createData1("sixth-Semestre", 356, 16.0, 49, 3.9, 100),
  createData1("seventh-Semestre", 356, 16.0, 49, 3.9, 100),
  createData1("eightth-Semestre", 356, 16.0, 49, 3.9, 100),
];

const EducationalDetails = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Stack direction="row" spacing={2} sx={{ width: 500, height: 100 }}>
        <Avatar
          sx={{ width: 80, height: 80, border: "2px solid blue" }}
          src={sample_profile}
        />
        <div>
          <ThemeProvider theme={theme}>
            <Typography variant="body1">student_info</Typography>
            <Divider />
            <Typography variant="subtitle1">@gmail.com</Typography>
          </ThemeProvider>
        </div>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Certificates/Degree</TableCell>
              <TableCell align="right">Specialization</TableCell>
              <TableCell align="right">Institute</TableCell>
              <TableCell align="right">Passing Year</TableCell>
              <TableCell align="right">Board/University</TableCell>
              <TableCell align="right">Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Certificates}
                </TableCell>
                <TableCell align="right">{row.Specialization}</TableCell>
                <TableCell align="right">{row.Institute}</TableCell>
                <TableCell align="right">{row.PassingYear}</TableCell>
                <TableCell align="right">{row.BoardUniversity}</TableCell>
                <TableCell align="right">{row.Percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <br />
      <Typography align="left">Semister Info :</Typography>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Semester</TableCell>
              <TableCell align="right">Backlogs</TableCell>
              <TableCell align="right">Passing Year</TableCell>
              <TableCell align="right">Percentage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Semester}
                </TableCell>
                <TableCell align="right">{row.Backlogs}</TableCell>
                <TableCell align="right">{row.PassingYear}</TableCell>
                <TableCell align="right">{row.Percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EducationalDetails;
