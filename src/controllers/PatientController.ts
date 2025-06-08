import { Request, Response, NextFunction } from "express";
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

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id = Number(req.params.id);
      const patient = await service.findById(id);
      res.json(patient);
    } catch (err) {
      next(err);
    }
  }
}
