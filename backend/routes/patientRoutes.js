import express from "express";
    // import UserModel from "../model/userModel";
    import UserModel from "../model/userModel.js";


const router = express.Router();

// POST: Register new patient
router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new UserModel(userData);
    const result = await newUser.save();

    res.status(200).json({
      msg: "Patient registered successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Error saving patient:", error);
    res.status(500).json({
      msg: "Error in registering patient",
      error: error.message,
    });
  }
});

// GET: All patients (optional)
router.get("/", async (req, res) => {
  try {
    const patients = await UserModel.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching patients" });
  }
});

export default router;
