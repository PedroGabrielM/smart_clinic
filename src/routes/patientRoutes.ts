import { Router } from "express";
import { PatientController } from "../controllers/PatientController";

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
 * /patients:
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
 * /patients:
 *   get:
 *     summary: Lista todos os pacientes
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 */
router.get("/", (req, res, next) => ctrl.findAll(req, res, next));

/**
 * @swagger
 * /patients/{id}:
 *   get:
 *     summary: Retorna um paciente por ID
 *     tags: [Patients]
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
router.get("/:id", (req, res, next) => ctrl.findById(req, res, next));

export default router;
