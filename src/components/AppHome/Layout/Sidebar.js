import * as React from "react";
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import "../Styles/Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Link } from "react-router-dom";
import VJTI_logo from "../../../VJTI_logo.svg";
import Profile from "../../../Profile.png";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import WorkIcon from "@mui/icons-material/Work";
import { Avatar } from "@mui/material";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

// const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();
  const LogOutChange = async () => {
    localStorage.removeItem("AuthToken");
    navigate("/login");
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    // if (!isClosing) {
    //   setMobileOpen(!mobileOpen);
    // }
    setMobileOpen(!mobileOpen);
  };

  // Fetch Image
  const [photo, setPhoto] = useState("");
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
    setPhoto(r.userData.photo);
  };
  useEffect(() => {
    if (!localStorage.getItem("AuthToken")) {
      console.log("Error");
    } else {
      fetchData();
    }
  }, []);
  console.log(photo);

  // Light and Dark Mode

  const drawer = (
    <div>
      <Toolbar />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 1 && (
            <img
              src={Profile}
              alt="Profile"
              style={{ height: "150px", margin: "20px" }}
            />
          )}

        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 0 &&
          photo && (
            <Avatar
              sx={{
                width: 150,
                height: 150,
                border: "0.5px solid black",
                // alignContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "20px",
              }}
              alt="Profile pic"
              src={photo}
            />
          )}

        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 0 &&
          !photo && (
            <img
              src={Profile}
              alt="Profile"
              style={{ height: "150px", margin: "20px" }}
            />
          )}

        {localStorage.getItem("AuthToken") ? (
          ""
        ) : (
          <img
            src={VJTI_logo}
            alt="VJTI LOGO"
            style={{ height: "150px", marginBottom: "20px" }}
          />
        )}
      </div>

      <Divider />
      <List>
        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 0 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/candidate">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"My Profile"} />
              </ListItemButton>
            </ListItem>
          )}
        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 1 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin-dashboard">
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </ListItem>
          )}
        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 1 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin-company">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Admin Company"} />
              </ListItemButton>
            </ListItem>
          )}
        {!localStorage.getItem("AuthToken") && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        )}

        {/* Job Profiles */}

        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 0 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/job-profiles">
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary={"Job Profiles"} />
              </ListItemButton>
            </ListItem>
          )}
        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 0 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/student-experience">
                <ListItemIcon>
                  <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText primary={"Interview Experiences"} />
              </ListItemButton>
            </ListItem>
          )}

        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 1 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin-list2">
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary={"Add Job"} />
              </ListItemButton>
            </ListItem>
          )}

        {/* My Profile */}

        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 0 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/candidate">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"My Profile"} />
              </ListItemButton>
            </ListItem>
          )}
        {localStorage.getItem("AuthToken") &&
          localStorage.getItem("userType") == 0 && (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/alumni-connect">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Alumni Section"} />
              </ListItemButton>
            </ListItem>
          )}
        {!localStorage.getItem("AuthToken") && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/ourTeam">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={"Our Team"} />
            </ListItemButton>
          </ListItem>
        )}
        {!localStorage.getItem("AuthToken") && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/about">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary={"Why VJTI"} />
            </ListItemButton>
          </ListItem>
        )}
        {!localStorage.getItem("AuthToken") && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/placement">
              <ListItemIcon>
                <SignalCellularAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Placement Statistics"} />
            </ListItemButton>
          </ListItem>
        )}
        {!localStorage.getItem("AuthToken") && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/recruitment">
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary={"Recruitment Process"} />
            </ListItemButton>
          </ListItem>
        )}
        {!localStorage.getItem("AuthToken") && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/recruiters">
              <ListItemIcon>
                <CorporateFareIcon />
              </ListItemIcon>
              <ListItemText primary={"Our Recruiters"} />
            </ListItemButton>
          </ListItem>
        )}
        {!localStorage.getItem("AuthToken") && (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/contact">
              <ListItemIcon>
                <PermContactCalendarIcon />
              </ListItemIcon>
              <ListItemText primary={"Contact Us"} />
            </ListItemButton>
          </ListItem>
        )}

        {localStorage.getItem("AuthToken") ? (
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              onClick={() => {
                localStorage.removeItem("AuthToken");
                localStorage.removeItem("userType");
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItemButton>
          </ListItem>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/signup">
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Sign Up"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/login">
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="Navbar">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          // sx={{
          //   width: { sm: `calc(100% - ${drawerWidth}px)` },
          //   ml: { sm: `${drawerWidth}px` },
          // }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              // sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* VJTI Logo */}
            <img
              src={VJTI_logo}
              alt="VJTI Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <Typography variant="h6" noWrap component="div">
              Training and Placement Portal of VJTI
            </Typography>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          // sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            // onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            // sx={{
            //   display: { xs: "block", sm: "none" },
            //   "& .MuiDrawer-paper": {
            //     boxSizing: "border-box",
            //     width: drawerWidth,
            //   },
            // }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;
