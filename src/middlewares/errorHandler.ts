import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  switch (err.message) {
    case "PATIENT_EMAIL_CONFLICT":
      return res.status(409).json({ message: "Email de paciente já cadastrado." });
    case "DOCTOR_EMAIL_CONFLICT":
      return res.status(409).json({ message: "Email de médico já cadastrado." });
    case "PATIENT_NOT_FOUND":
      return res.status(404).json({ message: "Paciente não encontrado." });
    case "DOCTOR_NOT_FOUND":
      return res.status(404).json({ message: "Médico não encontrado." });
    case "DOCTOR_SCHEDULE_CONFLICT":
      return res
        .status(409)
        .json({ message: "O médico já possui agendamento neste horário." });
    default:
      console.error(err);
      return res.status(500).json({ message: "Erro interno no servidor." });
  }
}
