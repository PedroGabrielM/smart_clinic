import swaggerJsDoc from "swagger-jsdoc";

export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clinic API",
      version: "1.0.0",
      description:
        "API RESTful para clínica médica, com cadastro de pacientes, médicos e agendamentos.",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/docs/swaggerComponents.ts"],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
