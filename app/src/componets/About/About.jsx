import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-header">
        <h1>About Our Doctor Management System</h1>
        <p>
          Simplifying healthcare with technology. Our system helps hospitals,
          clinics, and doctors to manage patients, appointments, and medical
          records efficiently.
        </p>
      </div>

      <div className="about-cards">
        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3063/3063176.png"
            alt="Doctors"
          />
          <h2>Doctor Profiles</h2>
          <p>
            Manage doctor details, specialties, and availability in one place.
          </p>
        </div>

        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
            alt="Appointments"
          />
          <h2>Appointments</h2>
          <p>
            Patients can easily book and manage appointments with doctors.
          </p>
        </div>

        <div className="card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
            alt="Reports"
          />
          <h2>Medical Records</h2>
          <p>Store, track, and access patient medical history securely.</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
