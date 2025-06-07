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
    @IsNotEmpty({ message: "O campo patient_id é obrigatório." })
    @IsInt({ message: "O campo patient_id deve ser um inteiro." })
    @Type(() => Number)
    patient_id!: number;

    @IsNotEmpty({ message: "O campo doctor_id é obrigatório." })
    @IsInt({ message: "O campo doctor_id deve ser um inteiro." })
    @Type(() => Number)
    doctor_id!: number;

    @IsNotEmpty({ message: "O campo appointment_date é obrigatório." })
    @IsISO8601({}, { message: "O campo appointment_date deve ser uma data ISO 8601." })
    appointment_date!: string;

    @IsOptional()
    @IsString({ message: "O campo notes deve ser uma string." })
    @Length(0, 255, {
      message: "O campo notes deve ter até $constraint2 caracteres.",
  })
    notes?: string;
}
