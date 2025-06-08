import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Patient } from "../entities/Patient";
import { Doctor } from "../entities/Doctor";
import { Appointment } from "../entities/Appointment";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "clinic_db",
  synchronize: true,
  logging: false,
  entities: [Patient, Doctor, Appointment],
  migrations: [],
  subscribers: [],
});
