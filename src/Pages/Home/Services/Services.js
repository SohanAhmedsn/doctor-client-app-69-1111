import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluride Treatement",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!",
    img: fluoride,
  },
  {
    name: "cavity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!",
    img: cavity,
  },
  {
    name: "whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{ fontWeight: "bold", color: "success.main", m:5 }} variant="h6" component="div">
          Our service
        </Typography>
        <Typography
          sx={{ fontWeight: "bold",m:5, color: 'warning.main' }}
          variant="h4"
          component="div"
        >
          We Provide a services
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
