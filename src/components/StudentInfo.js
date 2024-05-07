import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Avatar,
  // ListItem,
  Stack,
  // List,
  // ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import sample_profile from "./sample_profile.jpg";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EducationalDetails from "./EducationalDetails";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditProfile from "./StudentPannel/EditProfile";
import logo from "./Profile.png";
import UploadPhoto from "./StudentPannel/UploadPhoto";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { styled } from "@mui/material/styles";

// Table Styling

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

const array = ["A"];

const StudentInfo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const EditPath = () => {
    navigate("/edit-profile");
  };
  const imgdata = {
    imgb64: "",
  };
  const data = {
    "Registration Number": '"Enter Registration Number',
    "First Name": "Enter FirstName",
    "Last Name": "Enter LastName",
    Branch: "Enter Branch",
    CPI: "Enter current CPI",
    Gender: "Male",
    Phone: "Enter Phone Number",
    "Enrollment year": 2020,
    "Date of Birth": "Enter Date of Birth",
    Degree: "Enter Degree",
  };
  const [credential, setCredentials] = useState(data);
  const [image, setImage] = useState(imgdata);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/v1/fetchdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
    });
    const r = await response.json();
    // console.log(r.userData.firstName);
    setImage({
      imgb64: r.userData.imgb64,
    });
    setCredentials({
      "First Name": r.userData.firstName,
      "Last Name": r.userData.lastName,
      Gender: r.userData.sex,
      "Registration Number": r.userData.regnumber,
      Phone: r.userData.phone,
      Degree: r.userData.degree,
      Branch: r.userData.branch,
      CPI: r.userData.currcpi,
      "Date of Birth": r.userData.dob,
      "Enrollment year": r.userData.enrollmentyear,
      photo: r.userData.photo,
    });
  };
  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      navigate("/login");
    } else {
      fetchData();
    }
  }, []);
  console.log(credential);

  // Object.entries(credential).map((entry) => {
  //   let key = entry[0];
  //   let value = entry[1];
  //   console.log(key, value);
  // });
  return (
    <Box>
      <Typography variant="h6">My Profile</Typography>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ sx: { display: "none" } }}
            sx={{
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
            // Stack Overflow
          >
            <Tab label="Personal Details" {...a11yProps(0)} />
            <Tab label="Educational Details" {...a11yProps(1)} />
            <Tab label="Edit Profile" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
          spacing={2}
        >
          <Grid item xs={12} sm={4}>
            <Stack
              sx={{
                width: "300px",
                margin: "auto",
              }}
            >
              {credential.photo ? (
                <>
                  {credential.photo && (
                    <>
                      <Avatar
                        sx={{
                          width: 150,
                          height: 150,
                          border: "0.5px solid black",
                          // alignContent: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        alt="Profile pic"
                        src={credential.photo}
                      />

                      <div>Update Profile</div>
                      <UploadPhoto />
                    </>
                  )}
                </>
              ) : (
                <>
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      border: "2px solid blue",
                      // alignContent: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    alt="Profile pic"
                    src={sample_profile}
                  />

                  <div>Upload Profile</div>
                  <UploadPhoto />
                </>
              )}
            </Stack>
          </Grid>

          <Box sx={{ width: "100%" }}>
            <TableContainer
              component={Paper}
              sx={{ maxWidth: "70%", margin: "auto" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      align="center"
                      colSpan={2}
                      sx={{ fontSize: "25px" }}
                    >
                      {credential["First Name"] === "Enter First Name"
                        ? "Update Profile"
                        : "Student Details"}
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(credential)
                    .filter(([key]) => key !== "photo")
                    .map((i, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell sx={{ width: "30%" }}>
                          {i[0]}
                        </StyledTableCell>
                        <StyledTableCell sx={{ width: "70%" }}>
                          {i[1]}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  {/* {Object.entries(credential)
                    .filter(([key]) => key !== "photo")
                    .map(([key, value], index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell>{key}</StyledTableCell>
                        <StyledTableCell>{value}</StyledTableCell>
                      </StyledTableRow>
                    ))} */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={EditPath}>Edit Profile</MenuItem>

            <MenuItem onClick={handleClose}>Change Password</MenuItem>
          </Menu> */}
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EducationalDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <EditProfile />
      </CustomTabPanel>
    </Box>
  );
};

export default StudentInfo;
