// src/services/AppointmentService.ts
import { AppDataSource } from "../database/data-source";
import { Appointment } from "../entities/Appointment";
import { CreateAppointmentDto } from "../dtos/CreateAppointmentDto";
import { Patient } from "../entities/Patient";
import { Doctor } from "../entities/Doctor";

export class AppointmentService {
  private repo = AppDataSource.getRepository(Appointment);
  private patientRepo = AppDataSource.getRepository(Patient);
  private doctorRepo = AppDataSource.getRepository(Doctor);

  /** Cria um agendamento, validando existência e conflitos de horário */
  async create(dto: CreateAppointmentDto): Promise<Appointment> {
    // 1) verificar paciente
    const patient = await this.patientRepo.findOneBy({ id: dto.patient_id });
    if (!patient) throw new Error("PATIENT_NOT_FOUND");

    // 2) verificar médico
    const doctor = await this.doctorRepo.findOneBy({ id: dto.doctor_id });
    if (!doctor) throw new Error("DOCTOR_NOT_FOUND");

    // 3) verificar conflito de agenda
    const date = new Date(dto.appointment_date);
    const conflict = await this.repo.findOneBy({
      doctor_id: dto.doctor_id,
      appointment_date: date,
    });
    if (conflict) throw new Error("DOCTOR_SCHEDULE_CONFLICT");

    // 4) criar e salvar
    const appointment = this.repo.create({
      patient_id: dto.patient_id,
      doctor_id: dto.doctor_id,
      appointment_date: date,
      notes: dto.notes || "",
    });
    return this.repo.save(appointment);
  }

  /** Lista agendamentos de um médico, ordenados por data asc */
  async findByDoctor(doctorId: number): Promise<Appointment[]> {
    const doctor = await this.doctorRepo.findOneBy({ id: doctorId });
    if (!doctor) throw new Error("DOCTOR_NOT_FOUND");
    return this.repo.find({
      where: { doctor: { id: doctorId } },
      relations: ["patient", "doctor"],
      order: { appointment_date: "ASC" },
    });
  }

  /** Lista agendamentos de um paciente, ordenados por data asc */
  async findByPatient(patientId: number): Promise<Appointment[]> {
    const patient = await this.patientRepo.findOneBy({ id: patientId });
    if (!patient) throw new Error("PATIENT_NOT_FOUND");
    return this.repo.find({
      where: { patient: { id: patientId } },
      relations: ["patient", "doctor"],
      order: { appointment_date: "ASC" },
    });
  }
}
