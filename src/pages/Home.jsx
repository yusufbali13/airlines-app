import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/data";
import { useState } from "react";
import logo from "../helper/turkish.png";

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);

  console.log(appointments);
  return (
    <main className="text-center mt-2">
      <img className="mb-5" src={logo} alt="" width={600} />
      <Doctors apps={appointments} setApps={setAppointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  );
};

export default Home;
