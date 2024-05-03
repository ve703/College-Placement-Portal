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
} from "@mui/material";
import sample_profile from "./sample_profile.jpg";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EducationalDetails from "./EducationalDetails";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditProfile from "./StudentPannel/EditProfile";
import logo from "./Profile.png";
import UploadPhoto from "./StudentPannel/UploadPhoto";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

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
      "Registration Number": r.userData.regnumber,
      "First Name": r.userData.firstName,
      "Last Name": r.userData.lastName,
      Branch: r.userData.branch,
      CPI: r.userData.currcpi,
      "Date of Birth": r.userData.dob,
      "Enrollment year": r.userData.enrollmentyear,
      Phone: r.userData.phone,
      Gender: r.userData.sex,
      Degree: r.userData.degree,
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
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Stack sx={{ width: "300px" }}>
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

            {/* <Button
              sx={{
                height: 20,
                marginTop: "10px",
                color: "black",
              }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Typography variant="h5">...</Typography>
            </Button> */}
          </Stack>
          <Box sx={{ border: 1, width: "100%" }}>
            <Typography variant="h5">
              {credential["First Name"] === "Enter First Name"
                ? "Update Profile in Edit profile Section"
                : credential["First Name"] + " " + credential["Last Name"]}
            </Typography>
            <Divider />
            {/* <List sx={{ height: 600, width: 980, background: "white" }}>
                {array.map((listElem) => (
                  <ListItem>
                    <ListItemText primary={listElem} />
                  </ListItem>
                ))}
              </List> */}

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* <TableCell align="left">Credentials</TableCell>
                      <TableCell align="left">Details</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(credential).map((i, index) => (
                    <TableRow key={index}>
                      <TableCell>{i[0]}</TableCell>
                      <TableCell>{i[1]}</TableCell>
                    </TableRow>
                  ))}
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
