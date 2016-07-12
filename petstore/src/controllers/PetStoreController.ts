import { Controller, Get } from 'routing-controllers';
import { Inject } from 'typedi';
import { PetModel } from '../models/PetModel';

@Controller('/pets')
export class PetStoreController {

  @Inject()
  pets: PetModel;

  @Get('/')
  async get(): Promise<any> {
    let client = await this.pets.client;
    let pet = await client.pet.getPetById({ petId: 7 });
    return pet;
  }

}
