import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import AppointmetHeader from "../AppointmentHeader/AppointmetHeader";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <AppointmetHeader date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
    </div>
  );
};

export default Appointment;
