import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { message } from "antd";

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

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
    userType: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const r = await response.json();
      console.log(r.msgType);
      if (r.msgType === "success") {
        message.success(r.msg);
        navigate("/login");
      } else {
        message.warning(r.msg);
      }
      setLoading(false);
      console.log(formData);
    } catch (error) {
      console.error("Sign up error", error.message);
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
        Sign Up
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
              // value={age}
              label="User Type"
              name="userType"
              onChange={handleChange}
              sx={{ width: "100%" }}
              align="left"
              // autoFocus
            >
              <MenuItem value={0} defaultChecked>
                Student
              </MenuItem>
              <MenuItem value={1}>Admin</MenuItem>
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="User Name"
              name="userName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
              sx={{ width: "100%" }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
              sx={{ width: "100%" }}
            />
          </Grid> */}
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
          Sign Up
        </Button>

        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
      </form>

      <Copyright sx={{ mt: 4, mb: 4 }} />
    </Container>
  );
}

export default SignUp;
