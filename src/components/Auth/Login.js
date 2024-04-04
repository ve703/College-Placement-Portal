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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import CircularProgress from "@mui/material/CircularProgress";

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


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const r = await response.json();
    if (r.msgType === "success") {
      message.success(r.msg);
      if (r.userType === 0) {
        navigate("/student-dashboard");
      } else if (r.userType === "1") {
        navigate("/admin-dashboard");
      }
    } else {
      message.warning(r.msg);
    }
    setLoading(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.userType === "0") {
      navigate("/student-dashboard");
    } else if (formData.userType === "1") {
      navigate("/admin-dashboard");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {loading && (
        <div className="spinner">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}

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
            <Link href="/forgotPassword" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </form>
    </Container>
  );
}

export default Login;
