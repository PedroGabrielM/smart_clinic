// src/routes/doctorRoutes.ts
import { Router } from "express";
import { DoctorController } from "../controllers/DoctorController";

const router = Router();
const ctrl = new DoctorController();

/**
 * @swagger
 * tags:
 *   name: Doctors
 *   description: Gerenciamento de médicos
 */

/**
 * @swagger
 * /api/doctors:
 *   post:
 *     summary: Cria um novo médico 
 *     tags: [Doctors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateDoctorsDto'
 *     responses:
 *       201:
 *         description: Médico criado com sucesso
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
 * /api/Doctors:
 *   get:
 *     summary: Lista todos os pacientes
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: Lista de médicosna base de dados
 */
router.get("/", (req, res, next) => ctrl.findAll(req, res, next));

export default router;
