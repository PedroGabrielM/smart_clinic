import {
  IsNotEmpty,
  IsInt,
  IsISO8601,
  IsOptional,
  IsString,
  Length,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateAppointmentDto {
  @IsNotEmpty({ message: "O campo patientId é obrigatório." })
  @IsInt({ message: "O campo patientId deve ser um inteiro." })
  @Type(() => Number)
  patientId!: number;

  @IsNotEmpty({ message: "O campo doctorId é obrigatório." })
  @IsInt({ message: "O campo doctorId deve ser um inteiro." })
  @Type(() => Number)
  doctorId!: number;

  @IsNotEmpty({ message: "O campo appointmentDate é obrigatório." })
  @IsISO8601({}, { message: "O campo appointmentDate deve ser uma data ISO 8601." })
  appointmentDate!: string;

  @IsOptional()
  @IsString({ message: "O campo notes deve ser uma string." })
  @Length(0, 255, {
    message: "O campo notes deve ter até $constraint2 caracteres.",
  })
  notes?: string;
}
