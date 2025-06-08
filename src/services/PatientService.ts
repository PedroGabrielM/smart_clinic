import { AppDataSource } from "../database/data-source";
import { Patient } from "../entities/Patient";
import { CreatePatientDto } from "../dtos/CreatePatientDto";

export class PatientService {
  private repo = AppDataSource.getRepository(Patient);

  /** Cria um novo paciente, lançando erro se o email já existir */
  async create(dto: CreatePatientDto){
    const exists = await this.repo.findOneBy({ email: dto.email });
    if (exists) throw new Error("PATIENT_EMAIL_CONFLICT");
    const patient = this.repo.create(dto);
    return this.repo.save(patient);
  }

  /** Retorna todos os pacientes */
  async findAll() {
    return this.repo.find();
  }

  /** Retorna paciente por ID ou null se não existir */
  async findById(id: number) {
    return this.repo.findOneBy({ id });
  }
}
