import React, { useState } from "react";
import "./Appointment.css";

export default function Appointment() {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.patientName ||
      !formData.email ||
      !formData.doctor ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.msg || "Appointment booked successfully!");
        setFormData({
          patientName: "",
          email: "",
          doctor: "",
          date: "",
          time: "",
          symptoms: "",
        });
      } else {
        alert(data.msg || "Failed to book appointment!");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Server error, please try again later!");
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-box">
        <h2>Book an Appointment</h2>
        <p>Please fill in your details below to schedule a consultation.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="patientName"
            placeholder="Full Name"
            value={formData.patientName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Mehta">Dr. Mehta (Cardiologist)</option>
            <option value="Dr. Sharma">Dr. Sharma (Dermatologist)</option>
            <option value="Dr. Patel">Dr. Patel (Neurologist)</option>
          </select>

          <div className="date-time">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="symptoms"
            placeholder="Describe your symptoms (optional)"
            value={formData.symptoms}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}
