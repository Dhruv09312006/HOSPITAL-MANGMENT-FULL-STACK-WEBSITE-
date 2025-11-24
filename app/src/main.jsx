import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";


import App from "./App.jsx";
import Navbar from "./componets/Navbar/Navbar.jsx";
import Home from "./componets/Homee/Home.jsx";
import About from "./componets/About/About.jsx";
import Doctor from "./componets/Doctor/Doctor.jsx";
import Appointment from "./componets/Appointment/Appointment.jsx";
import Paisent from "./componets/Paisent/Paisent.jsx";
import Contact from "./componets/Contect/Contact.jsx";
import Auth from "./assets/Auth/Auth.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Dashboard from "./componets/DashBoard.jsx";
// import Footer from "./componets/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public route */}
        <Route path="/auth" element={<Auth />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctor"
          element={
            <ProtectedRoute>
              <Doctor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient"
          element={
            <ProtectedRoute>
              <Paisent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* ✅ Appointment route (inside Routes) */}
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  </StrictMode>
);
