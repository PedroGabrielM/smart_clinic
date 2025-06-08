import { Router } from "express";
import patientRoutes from "./patientRoutes";
import doctorRoutes from "./doctorRoutes";
import appointmentRoutes from "./appointmentRoutes";

const router = Router();

router.use("/patients", patientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/appointments", appointmentRoutes);

export default router;
