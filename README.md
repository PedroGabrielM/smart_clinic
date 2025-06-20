# Smart Clinic API

## Descrição

API RESTful para uma clínica médica, desenvolvida em **Node.js**, **TypeScript**, **Express**, **TypeORM** e **PostgreSQL**.  
Suporta:

- Cadastro de **Pacientes**
- Cadastro de **Médicos**
- Criação de **Agendamentos** entre pacientes e médicos
- Listagem de agendamentos por médico
- Listagem de agendamentos por paciente
- **Documentação** interativa com **Swagger**

---

## Tecnologias

- Node.js 16+
- TypeScript
- Express
- TypeORM
- PostgreSQL
- class-validator / class-transformer
- swagger-ui-express / swagger-jsdoc
- dotenv
- cors

---

## Instalação

Copie o .env.example para .env e preencha suas variáveis.

Instale dependências:
npm install

Inicialize o banco (local ou via Docker):
Local: crie manualmente o banco ou use script SQL.

Docker:
docker-compose up -d db
docker-compose up -d app
docker exec -it container_clinic_db  psql -U postgres -d clinic_db

Postgres:
CREATE DATABASE smart_clinic_api;
\q

Em dev:
npm run dev

Em produção:
npm run build
npm start

Acesse o Swagger:
http://localhost:3000/api-docs

Rode testes:
npm test
