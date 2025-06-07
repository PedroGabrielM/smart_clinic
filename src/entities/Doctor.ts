import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Appointment } from "./Appointment";

@Entity({ name: "doctors" })
export class Doctor {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ length: 100 })
    name!: string;

  @Column({ length: 100 })
    specialty!: string;

  @Column({ length: 100, unique: true })
    email!: string;

  @Column({ length: 15 })
    phone!: string;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
    appointments!: Appointment[];
}
