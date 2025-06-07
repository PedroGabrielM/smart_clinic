import {
  IsNotEmpty,
  IsString,
  Length,
  IsEmail,
} from "class-validator";

export class CreateDoctorDto {
    @IsNotEmpty({ message: "O campo name é obrigatório." })
    @IsString({ message: "O campo name deve ser uma string." })
    @Length(1, 100, {
        message: "O campo name deve ter entre $constraint1 e $constraint2 caracteres.",
    })
    name!: string;

    @IsNotEmpty({ message: "O campo specialty é obrigatório." })
    @IsString({ message: "O campo specialty deve ser uma string." })
    @Length(1, 100, {
        message: "O campo specialty deve ter até $constraint2 caracteres.",
    })
    specialty!: string;

    @IsNotEmpty({ message: "O campo email é obrigatório." })
    @IsEmail({}, { message: "O campo email deve ser um email válido." })
    @Length(1, 100, {
        message: "O campo email deve ter até $constraint2 caracteres.",
    })
    email!: string;

    @IsNotEmpty({ message: "O campo phone é obrigatório." })
    @IsString({ message: "O campo phone deve ser uma string." })
    @Length(1, 15, {
        message: "O campo phone deve ter até $constraint2 caracteres.",
    })
    phone!: string;
}
