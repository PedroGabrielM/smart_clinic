import express from "express";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";

export const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// inicializa DB
AppDataSource.initialize()
  .then(() => console.log("Data Source inicializado"))
  .catch((err) => console.error("Erro ao inicializar Data Source:", err));
