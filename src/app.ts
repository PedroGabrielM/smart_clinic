// src/app.ts
import express from "express";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./docs/swagger";
import { errorHandler } from "./middlewares/errorHandler";
import { Request, Response, NextFunction } from "express";

export const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rotas e docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", routes);

app.use(errorHandler as (err: any, req: Request, res: Response, next: NextFunction) => void);

// inicializa DB
AppDataSource.initialize()
  .then(() => console.log("Data Source inicializado"))
  .catch((err) => console.error("Erro ao inicializar Data Source:", err));
