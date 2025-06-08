import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Patient } from "./Patient";
import { Doctor } from "./Doctor";

@Entity({ name: "appointments" })
export class Appointment {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Patient, (patient) => patient.appointments, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn({ name: "patient_id" })
  patient!: Patient;

  @Column({ name: "patient_id" })
  patientId!: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn({ name: "doctor_id" })
  doctor!: Doctor;

  @Column({ name: "doctor_id" })
  doctorId!: number;

  @Column("timestamp without time zone", { name: "appointment_date" })
  appointmentDate!: Date;

  @Column({ length: 255, nullable: true })
  notes!: string;
}