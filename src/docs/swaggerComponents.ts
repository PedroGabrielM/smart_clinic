/**
 * @swagger
 * components:
 *   schemas:
 *     CreatePatientDto:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do paciente
 *           example: Pedro Marins
 *         email:
 *           type: string
 *           format: email
 *           description: Email único do paciente
 *           example: pedro.marins@example.com
 *         phone:
 *           type: string
 *           description: Telefone do paciente
 *           example: "35987654321"
 *
 *     Patient:
 *       allOf:
 *         - $ref: '#/components/schemas/CreatePatientDto'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: ID gerado pelo banco
 *               example: 1
 *
 *     CreateDoctorDto:
 *       type: object
 *       required:
 *         - name
 *         - specialty
 *         - email
 *         - phone
 *       properties:
 *         name:
 *           type: string
 *           example: Dra. Maria Souza
 *         specialty:
 *           type: string
 *           example: Cardiologia
 *         email:
 *           type: string
 *           format: email
 *           example: maria.souza@example.com
 *         phone:
 *           type: string
 *           example: "11912345678"
 *
 *     Doctor:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateDoctorDto'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 2
 *
 *     CreateAppointmentDto:
 *       type: object
 *       required:
 *         - patient_id
 *         - doctor_id
 *         - appointment_date
 *       properties:
 *         patient_id:
 *           type: integer
 *           example: 1
 *         doctor_id:
 *           type: integer
 *           example: 2
 *         appointment_date:
 *           type: string
 *           format: date-time
 *           description: Data e hora da consulta (ISO 8601)
 *           example: "2025-07-15T14:00:00Z"
 *         notes:
 *           type: string
 *           description: Observações adicionais
 *           example: "Revisar exames de sangue."
 *
 *     Appointment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 3
 *         patient:
 *           $ref: '#/components/schemas/Patient'
 *         doctor:
 *           $ref: '#/components/schemas/Doctor'
 *         appointment_date:
 *           type: string
 *           format: date-time
 *           example: "2025-07-15T14:00:00Z"
 *         notes:
 *           type: string
 *           example: "Revisar exames de sangue."
 */
