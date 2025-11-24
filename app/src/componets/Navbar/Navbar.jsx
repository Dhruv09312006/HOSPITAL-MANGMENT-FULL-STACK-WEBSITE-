import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container-fluid px-3 px-md-5">
        {/* Brand logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img
            src="https://www.hospitalmanagementasia.com/wp-content/uploads/2022/08/Hospital-Management-Logo-Big-PNG.png"
            alt="MedCare Logo"
            style={{ height: "60px", objectFit: "contain" }}
          />
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center gap-3">
            <li className="nav-item">
              <Link className="nav-link py-2" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2" to="/doctor">Doctor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2" to="/appointment">Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2" to="/patient">Patient</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-2" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
  {/* <Link className="nav-link py-2" to="/auth">Login</Link> */}
</li>
<li className="nav-item">
  <button
    className="btn btn-danger ms-2"
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/auth";
    }}
  >
    Logout
  </button>
</li>


          </ul>
        </div>
      </div>
    </nav>
  );
}
