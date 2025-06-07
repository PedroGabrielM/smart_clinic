// src/routes/appointmentRoutes.ts
import { Router } from "express";
import { AppointmentController } from "../controllers/AppointmentController";
import { validateDto } from "../middlewares/validateDto";
import { CreateAppointmentDto } from "../dtos/CreateAppointmentDto";

const router = Router();
const ctrl = new AppointmentController();

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Gerenciamento de agendamentos
 */

router.post("/", (req, res, next) =>
  ctrl.create(req, res, next)
);

router.get("/doctor/:doctorId", (req, res, next) =>
  ctrl.findByDoctor(req, res, next)
);

router.get("/patient/:patientId", (req, res, next) =>
  ctrl.findByPatient(req, res, next)
);

export default router;
