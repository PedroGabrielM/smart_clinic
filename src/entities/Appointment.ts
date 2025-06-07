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

  @Column()
    patient_id!: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments, {
    onDelete: "CASCADE",
    eager: true,
  })

  @JoinColumn({ name: "doctor_id" })
    doctor!: Doctor;

  @Column()
    doctor_id!: number;

  @Column("timestamp without time zone")
    appointment_date!: Date;

  @Column({ length: 255, nullable: true })
    notes!: string;
}
