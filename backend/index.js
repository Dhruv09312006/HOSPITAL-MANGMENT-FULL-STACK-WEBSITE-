import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/index.js";
import patientRoutes from "./routes/patientRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/patient", patientRoutes);
app.use("/appointment", appointmentRoutes);

app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send({ msg: "🏥 Hospital Management API is running..." });
});

// Connect DB and start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
