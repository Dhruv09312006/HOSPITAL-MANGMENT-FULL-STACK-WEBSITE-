import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    email: { type: String, required: true },
    doctor: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    symptoms: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
