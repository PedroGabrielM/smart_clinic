// src/routes/patientRoutes.ts
import { Router } from "express";
import { PatientController } from "../controllers/PatientController";
import { validateDto } from "../middlewares/validateDto";
import { CreatePatientDto } from "../dtos/CreatePatientDto";

const router = Router();
const ctrl = new PatientController();

/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: Gerenciamento de pacientes
 */

/**
 * @swagger
 * /api/patients:
 *   post:
 *     summary: Cria um novo paciente
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePatientDto'
 *     responses:
 *       201:
 *         description: Paciente criado
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
 * /api/patients:
 *   get:
 *     summary: Lista todos os pacientes
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 */
router.get("/", (req, res, next) => ctrl.findAll(req, res, next));

export default router;
    