// src/entities/Patient.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Appointment } from "./Appointment";

@Entity({ name: "patients" })
export class Patient {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
    name!: string;

  @Column({ length: 100, unique: true })
    email!: string;

  @Column({ length: 15 })
    phone!: string;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
    appointments!: Appointment[];
}
