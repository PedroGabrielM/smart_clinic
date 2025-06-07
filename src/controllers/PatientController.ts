// src/controllers/PatientController.ts
import { Request, Response, NextFunction } from "express";
// Update the import path below if the actual location is different
import { PatientService } from "../services/PatientService";

const service = new PatientService();

export class PatientController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const patient = await service.create(req.body);
      res.status(201).json(patient);
    } catch (err) {
      next(err);
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const list = await service.findAll();
      res.json(list);
    } catch (err) {
      next(err);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const patient = await service.findById(id);
      if (!patient) return res.status(404).json({ message: "Paciente não encontrado." });
      res.json(patient);
    } catch (err) {
      next(err);
    }
  }
}
