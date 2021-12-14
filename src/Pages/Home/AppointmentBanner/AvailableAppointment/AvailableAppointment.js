import { Container, Grid } from "@mui/material";
import React from "react";
import Booking from "../Appointment/Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthidonics",
    time: "08:00 AM - 09:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Teeth Orthidonics",
    time: "08:00 AM - 09:00 AM",
    space: 9,
  },
  {
    id: 3,
    name: "Teeth Orthidonics",
    time: "08:00 AM - 09:00 AM",
    space: 5,
  },
  {
    id: 4,
    name: "Teeth Orthidonics",
    time: "08:00 AM - 09:00 AM",
    space: 8,
  },
  {
    id: 5,
    name: "Teeth Orthidonics",
    time: "08:00 AM - 09:00 AM",
    space: 2,
  },
  {
    id: 6,
    name: "Teeth Orthidonics",
    time: "08:00 AM - 09:00 AM",
    space: 4,
  },
];

const AvailableAppointment = ({ date }) => {
  return (
    <Container>
      <h2>Available Appointment {date.toDateString()}</h2>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking booking={booking}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
