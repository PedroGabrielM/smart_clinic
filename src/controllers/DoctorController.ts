import { Request, Response, NextFunction } from "express";
import { DoctorService } from "../services/DoctorService";

const service = new DoctorService();

export class DoctorController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const doctor = await service.create(req.body);
      res.status(201).json(doctor);
    } catch (err) {
      next(err);
    }
  }

  async findAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const list = await service.findAll();
      res.json(list);
    } catch (err) {
      next(err);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void>{
    try {
      const id = Number(req.params.id);
      const doctor = await service.findById(id);
      res.json(doctor);
    } catch (err) {
      next(err);
    }
  }
}
