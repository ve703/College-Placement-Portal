import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Avatar,
  ListItem,
  Stack,
  List,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import sample_profile from "./sample_profile.jpg";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EducationalDetails from "./EducationalDetails";

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

const array = [
  "RollNo. :",
  "Program :",
  "Stream :",
  "Enrollment Year :",
  "Backlog :",
  "Current Percentage :",
  "Email :",
  "Phone No :",
  "Sex :",
  "D.O.B :",
  "Current Address :",
  "permanent Address :",
];

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

  return (
    <Box>
      <Typography variant="h6">My Profile</Typography>
      <Box sx={{ width: "100%", border: 1 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Personal Details" {...a11yProps(0)} />
            <Tab label="Educational Details" {...a11yProps(1)} />
            <Tab label="Resume" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Stack direction="row" spacing={10}>
            <Avatar
              sx={{ width: 150, height: 150, border: "2px solid blue" }}
              alt="Profile pic"
              src={sample_profile}
            />
            <Box sx={{ border: 1 }}>
              <Typography variant="h5">Student Name </Typography>
              <Divider />
              <List sx={{ height: 600, width: 980, background: "white" }}>
                {array.map((listElem) => (
                  <ListItem>
                    <ListItemText primary={listElem} />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Button
              sx={{ height: 20 }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Typography variant="h5">...</Typography>
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
              <MenuItem onClick={handleClose}>Change Password</MenuItem>
            </Menu>
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <EducationalDetails />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Resume
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default StudentInfo;
