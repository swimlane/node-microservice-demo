import { Controller, Get } from 'routing-controllers';
import { Inject } from 'typedi';
import { PetService, PetModel } from '../services/PetService';

@Controller('/pets')
export class PetStoreController {

  @Inject()
  petService: PetService;

  @Get('/')
  async get(): Promise<PetModel> {
    return this.petService.get(3);
  }

}
