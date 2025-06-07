import { Request, Response, NextFunction } from "express";
import { AppointmentService } from "../services/AppointmentService";

const service = new AppointmentService();

export class AppointmentController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const appt = await service.create(req.body);
      res.status(201).json(appt);
    } catch (err) {
      next(err);
    }
  }

  async findByDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const doctorId = Number(req.params.doctorId);
      const list = await service.findByDoctor(doctorId);
      res.json(list);
    } catch (err) {
      next(err);
    }
  }

  async findByPatient(req: Request, res: Response, next: NextFunction) {
    try {
      const patientId = Number(req.params.patientId);
      const list = await service.findByPatient(patientId);
      res.json(list);
    } catch (err) {
      next(err);
    }
  }
}
