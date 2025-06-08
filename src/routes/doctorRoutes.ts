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

router.post("/", (req, res, next) =>
  ctrl.create(req, res, next)
);

router.get("/", (req, res, next) => ctrl.findAll(req, res, next));

router.get("/:id", (req, res, next) => ctrl.findById(req, res, next));

export default router;
