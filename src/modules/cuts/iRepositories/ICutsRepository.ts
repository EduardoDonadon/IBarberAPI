import { ICreateCutDTO } from "@modules/cuts/dtos/ICreateCutDTO";
import { Cut } from "@modules/cuts/infra/typeorm/entities/Cut";


export interface ICutsRepository {
  create(data: ICreateCutDTO): Promise<Cut>;
  findAll(): Promise<Cut[]>;
  findByBarberId(barber_id: string): Promise<Cut[]>;
}