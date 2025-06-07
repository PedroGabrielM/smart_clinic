import { AppDataSource } from "../database/data-source";
import { Doctor } from "../entities/Doctor";
import { CreateDoctorDto } from "../dtos/CreateDoctorDto";

export class DoctorService {
  private repo = AppDataSource.getRepository(Doctor);

  /** Cria um novo médico, lançando erro se o email já existir */
  async create(dto: CreateDoctorDto): Promise<Doctor> {
    const exists = await this.repo.findOneBy({ email: dto.email });
    if (exists) throw new Error("DOCTOR_EMAIL_CONFLICT");
    const doctor = this.repo.create(dto);
    return this.repo.save(doctor);
  }

  /** Retorna todos os médicos */
  async findAll(): Promise<Doctor[]> {
    return this.repo.find();
  }

  /** Retorna médico por ID ou null se não existir */
  async findById(id: number): Promise<Doctor | null> {
    return this.repo.findOneBy({ id });
  }
}
