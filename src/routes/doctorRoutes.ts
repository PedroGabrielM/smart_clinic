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

router.post("/", (req, res, next) =>
  ctrl.create(req, res, next)
);

router.get("/", (req, res, next) => ctrl.findAll(req, res, next));

export default router;
