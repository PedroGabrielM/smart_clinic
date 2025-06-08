// src/routes/doctorRoutes.ts
import { Router } from "express";
import { DoctorController } from "../controllers/DoctorController";
import { validateDto } from "../middlewares/validateDto";
import { CreateDoctorDto } from "../dtos/CreateDoctorDto";

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
 *     description: Cria um novo médico no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateDoctorDto'
 *     responses:
 *       201:
 *         description: Médico criado
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
 * /api/doctors:
 *   get:
 *     summary: Lista todos os medicos
 *     description: Retorna uma lista de todos os médicos cadastrados no sistema.
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *      
 */
router.get("/", (req, res, next) => ctrl.findAll(req, res, next));

/**
 * @swagger
 * /api/doctors/{id}:
 *   get:
 *     summary: Retorna um médico por ID
 *     tags: [Doctors]
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
router.get("/:id", (req, res, next) => ctrl.findById(req, res, next));

export default router;
