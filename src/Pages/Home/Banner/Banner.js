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
  border: "1px solid red",
};
const Banner = () => {
  return (
    <Container style={backgroundBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Box>
          <Grid style={{textAlign: 'left'}} item xs={12} md={5}>
            <Typography variant="h6">
              Your New Smile <br />
              Start Here
            </Typography>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vel
              adipisci nisi fuga. Magnam iste ad adipisci officiis itaque ex?
            </Typography>
            <Button>Get Appointment</Button>
          </Grid>
        </Box>
        <Grid item xs={12} md={7} >
          <img style={{ width: "300px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
