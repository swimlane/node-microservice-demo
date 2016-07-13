import { Service, Inject } from 'typedi';
import { PetModel } from '../models/PetModel';
import { PetSwagger } from './PetSwagger';
import { MongoService } from './MongoService';

export class PetService extends MongoService {

  @Inject()
  swagger: PetSwagger;

  collectionName: string = 'Pets';

  create(obj) {
    throw new Error('todo!');
  }

  async get(id: number) {
    let client = await this.swagger.client;
    let pet = await client.pet.getPetById({ petId: id });
    return pet;
  }

  async save(id: number) {
    let client = await this.swagger.client;
    let pet = await client.pet.getPetById({ petId: id });
    let result = await this.insertOne(pet);
    return result;
  }

  async update() {
    throw new Error('todo!');
  }

  async destroy() {
    throw new Error('todo!');
  }

}

export { PetModel };
