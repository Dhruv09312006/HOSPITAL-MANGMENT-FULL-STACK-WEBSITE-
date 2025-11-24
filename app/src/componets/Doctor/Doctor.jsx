import React from "react";
import "./Doctor.css";

export default function Doctor() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Mehta",
      specialty: "Cardiologist",
      hospital: "Apollo Hospitals, Delhi",
      img: "https://img.freepik.com/premium-photo/portrait-indian-doctor-indian-doctor-smiling_890100-1265.jpg",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      hospital: "Fortis Hospital, Mumbai",
      img: "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg",
    },
    {
      id: 3,
      name: "Dr. Rakesh Patel",
      specialty: "Neurologist",
      hospital: "AIIMS, Delhi",
      img: "https://static.vecteezy.com/system/resources/previews/028/287/384/large_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg",
    },
    {
      id: 4,
      name: "Dr. Sneha Verma",
      specialty: "Pediatrician",
      hospital: "Max Healthcare, Bangalore",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div id="doctor" className="doctor-container">
      <div className="doctor-header">
        <h1>Our Doctors</h1>
        <p>
          Meet our experienced and dedicated medical professionals who provide
          world-class healthcare with compassion and excellence.
        </p>
      </div>

      <div className="doctor-cards">
        {doctors.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <img src={doc.img} alt={doc.name} />
            <h2>{doc.name}</h2>
            <p className="specialty">{doc.specialty}</p>
            <p className="hospital">{doc.hospital}</p>
            {/* <button className="btn-appointment">Book Appointment</button> */}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
