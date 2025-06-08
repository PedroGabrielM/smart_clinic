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

/**
 * @swagger
 * /api/doctor/{doctorId}:
 *   get:
 *     summary: Retorna um médico por ID
 *     tags: [Appointments]
 *     description: Retorna os dados de um médico específico com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *     responses:
 *       200:
 *         description: Dados do paciente
 *       404:
 *         description: Paciente não encontrado
 */
router.get("/doctor/:doctorId", (req, res, next) =>
  ctrl.findByDoctor(req, res, next)
);

/**
 * @swagger
 * /api/patient/{patientId}:
 *   get:
 *     summary: Retorna um médico por ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: { type: integer }
 *         required: true
 *     responses:
 *       200:
 *         description: Dados do paciente
 *       404:
 *         description: Paciente não encontrado
 */
router.get("/patient/:patientId", (req, res, next) =>
  ctrl.findByPatient(req, res, next)
);

export default router;
