import React from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import login from "../../../images/login.png";
import { NavLink } from "react-router-dom";
import UseAuth from "../../../Hook/UseAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { registerUser, isLoading } = UseAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLonginData = { ...loginData };
    newLonginData[field] = value;
    setLoginData(newLonginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password does not match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your password"
                name="password"
                onChange={handleOnChange}
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Retype your password"
                name="password2"
                onChange={handleOnChange}
                type="password"
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Register? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
