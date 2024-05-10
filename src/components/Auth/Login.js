import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Avatar,
  Link,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const regex = /@.{2}\.vjti\.ac\.in$/;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const [verifyData, setVerifyData] = useState({
    email: "",
    otp: "",
    newpass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setVerifyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!regex.test(formData.email)) {
      message.warning("Incorrect Email ID");
    } else {
      const response = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const r = await response.json();
      console.log(r);
      if (r.msgType === "success") {
        message.success(r.msg);
        console.log("HERE");
        localStorage.setItem("AuthToken", r.AuthToken);
        localStorage.setItem("userType", r.userType);
        if (r.userType === 0) {
          navigate("/candidate");
        } else if (r.userType === 1) {
          navigate("/admin-dashboard");
        }
      } else {
        message.warning(r.msg);
      }
    }
    setLoading(false);
  };
  const handleOnClick = async () => {
    if (!regex.test(verifyData.email)) {
      message.warning("Incorrect Email ID");
    } else {
      const email = {
        email: verifyData.email,
      };
      const response = await fetch("http://localhost:5000/api/v1/otpgenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const r = await response.json();
      console.log(r);
      localStorage.setItem("otp", r.otp);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseWithout = () => {
    setOpen(false);
    if (localStorage.getItem("otp")) {
      localStorage.removeItem("otp");
    }
  };
  const handleClose = async () => {
    if (verifyData.otp == "") {
      message.warning("Enter OTP");
    } else if (verifyData.otp == localStorage.getItem("otp")) {
      const response = await fetch("http://localhost:5000/api/v1/resetpass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verifyData),
      });
      const r = await response.json();
      console.log(r);
      console.log("HERE");
      message.success("Password Reset Successfully");
      localStorage.removeItem("otp");
      setOpen(false);
    } else {
      message.warning("Incorrect OTP");
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Container component="main" maxWidth="lg" sx={{ width: "100%" }}>
      <Paper
        sx={{
          padding: "20px",
          width: "100%",
          maxWidth: "500px",
          margin: "auto",

          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        }}
      >
        {loading && (
          <div className="spinner">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              type="email"
              variant="outlined"
              label="Enter Email"
              name="email"
              value={verifyData.email}
              onChange={handleChangeForm}
              fullWidth
              required
              sx={{ width: "100%" }}
            />
            <br />
            <br />
            <TextField
              type="email"
              variant="outlined"
              label="Enter New Password"
              name="newpass"
              value={verifyData.newpass}
              onChange={handleChangeForm}
              fullWidth
              required
              sx={{ width: "100%" }}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button type="small" variant="outlined" onClick={handleOnClick}>
                Send OTP
              </Button>
            </Typography>
            <br />

            <TextField
              type="email"
              variant="outlined"
              label="Enter OTP"
              name="otp"
              value={verifyData.otp}
              onChange={handleChangeForm}
              fullWidth
              required
              sx={{ width: "100%" }}
            />

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button type="small" variant="outlined" onClick={handleClose}>
                Verify
              </Button>
              <Button
                type="small"
                variant="outlined"
                onClick={handleCloseWithout}
              >
                Cancel
              </Button>
            </Typography>
          </Box>
        </Modal>
        <Box
          sx={{
            // marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>

        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel
                id="demo-simple-select-label"
                sx={{ textAlign: "left" }}
              >
                User Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.userType}
                label="User Type"
                name="userType"
                onChange={handleChange}
                sx={{ width: "100%" }}
                align="left"
              >
                <MenuItem value={0} defaultChecked>
                  Student
                </MenuItem>
                <MenuItem value={1}>Admin</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                label="College Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                variant="outlined"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          <Button
            sx={{ marginTop: 2 }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>

          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item xs>
              <Link onClick={handleOpen} variant="body2" id="fp">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 4 }} />
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
