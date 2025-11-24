import express from "express";
import AppointmentModel from "../model/appointmentModel.js";

const router = express.Router();

// ✅ CREATE Appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new AppointmentModel(req.body);
    await appointment.save();
    res.status(201).json({
      msg: "Appointment created successfully!",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error creating appointment",
      error: error.message,
    });
  }
});

// ✅ READ all Appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      msg: "Error fetching appointments",
      error: error.message,
    });
  }
});

// ✅ UPDATE Appointment
router.put("/:id", async (req, res) => {
  try {
    const updated = await AppointmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      msg: "Appointment updated successfully!",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error updating appointment",
      error: error.message,
    });
  }
});

// ✅ DELETE Appointment
router.delete("/:id", async (req, res) => {
  try {
    await AppointmentModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Appointment deleted successfully!" });
  } catch (error) {
    res.status(500).json({
      msg: "Error deleting appointment",
      error: error.message,
    });
  }
});

export default router;
