import express from "express";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./docs/swagger";
import { Request, Response, NextFunction } from "express";

export const app = express();
export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response {
if (process.env.NODE_ENV !== "production") {
  console.error(err);
}
return res.status(err.status || 500).json({
  error: err.message || "Erro interno do servidor",
  });
}

// middlewares
app.use(cors());
app.use(express.json());

// rotas e docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", routes);

// inicializa DB
AppDataSource.initialize()
  .then(() => console.log("Data Source inicializado"))
  .catch((err) => console.error("Erro ao inicializar Data Source:", err));
