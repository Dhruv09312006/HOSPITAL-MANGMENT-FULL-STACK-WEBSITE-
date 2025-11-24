import React, { useState } from "react";
import "./Paisent.css";

export default function Paisent() {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛑 Validation check
    if (!formData.username || !formData.age || !formData.gender || !formData.contact) {
      alert("Please fill in all fields before submitting!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.msg || "Patient registered successfully!");
        setFormData({ username: "", age: "", gender: "", contact: "" }); // reset form
      } else {
        alert(data.msg || "Failed to register patient");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Error connecting to server. Please try again later.");
    }
  };

  return (
    <>
      {/* ✅ Modal for patient registration */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Register New Patient
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Patient Name"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control mb-3"
                />

                <input
                  type="number"
                  name="age"
                  placeholder="Patient Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="form-control mb-3"
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="form-control mb-3"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

                <input
                  type="text"
                  name="contact"
                  placeholder="Patient Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-control mb-3"
                />

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Page Content */}
      <div id="patient" className="patient-container">
        <div className="patient-header">
          <h1>Patient Management</h1>
          <p>
            Manage patient records, appointments, billing, and medical histories
            efficiently with our hospital management system.
          </p>
        </div>

        <div className="patient-cards">
          <div className="patient-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"
              alt="Records"
            />
            <h2>Patient Records</h2>
            <p>
              Securely store and manage personal details, medical history, and
              prescriptions of patients.
            </p>
          </div>

          <div className="patient-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972356.png"
              alt="Appointments"
            />
            <h2>Appointments</h2>
            <p>
              Book, reschedule, or cancel appointments with ease using our
              platform.
            </p>
          </div>

          <div className="patient-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Billing"
            />
            <h2>Billing & Payments</h2>
            <p>
              Generate invoices, manage payments, and keep track of billing
              details without hassle.
            </p>
          </div>

          <div className="patient-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2622/2622266.png"
              alt="Reports"
            />
            <h2>Medical Reports</h2>
            <p>
              Access lab results, prescriptions, and diagnostic reports anytime,
              anywhere.
            </p>
          </div>
        </div>

        <div className="patient-cta">
          <h2>Enhancing Patient Care</h2>
          <p>
            Our system ensures that patient data is secure, accessible, and
            efficient — helping doctors provide the best care possible.
          </p>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Register New Patient
          </button>
        </div>
      </div>
    </>
  );
}
