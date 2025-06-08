import { Router } from "express";
import { AppointmentController } from "../controllers/AppointmentController";

const router = Router();
const ctrl = new AppointmentController();

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Gerenciamento de agendamentos
 */

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateAppointmentDto'
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *       409:
 *         description: Email já cadastrado
 *       422:
 *         description: Payload inválido
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
