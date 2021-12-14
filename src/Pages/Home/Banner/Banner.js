import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container } from "@mui/material";

const backgroundBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 450,
};
const Banner = () => {
  return (
    <Container style={backgroundBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Start Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 12,my:3, color: "gray", fontWeight: 300 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vel
              adipisci nisi fuga. Magnam iste ad adipisci officiis itaque ex?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;

/*
 <Container style={backgroundBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Box>
          <Grid item style={{ textAlign: "left" }}  xs={12} md={5}>
            <Typography variant="h3">
              Your New Smile <br />
              Start Here
            </Typography>
            <Typography variant="h6" sx={{fontSize:12, color: 'gray', fontWeight:300}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vel
              adipisci nisi fuga. Magnam iste ad adipisci officiis itaque ex?
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
          </Grid>
        </Box>
        <Grid item xs={12} md={7} style={verticalCenter}>
          <img style={{ width: "300px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>


*/
