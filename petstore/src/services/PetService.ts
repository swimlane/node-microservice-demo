import { Service, Inject } from 'typedi';
import { PetModel } from '../models/PetModel';
import { PetSwagger } from './PetSwagger';

@Service()
export class PetService {

  @Inject()
  swagger: PetSwagger;

  create(obj) {
    throw new Error('todo!');
  }

  async get(id: number) {
    let client = await this.swagger;
    let pet = await client.pet.getPetById({ petId: id });
    return pet;
  }

  async save() {
    throw new Error('todo!');
  }

  async update() {
    throw new Error('todo!');
  }

  async destroy() {
    throw new Error('todo!');
  }

}

export { PetModel };
