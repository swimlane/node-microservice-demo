import { Controller, Get, Param } from 'routing-controllers';
import { Inject } from 'typedi';
import { InsertOneWriteOpResult } from 'mongodb';
import { PetService, PetModel } from '../services/PetService';

@Controller('/pets')
export class PetStoreController {

  @Inject()
  petService: PetService;

  @Get('/')
  async get(): Promise<PetModel> {
    return this.petService.get(7);
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<PetModel> {
    return this.petService.get(id);
  }

  @Get('/save')
  async saveByGet(): Promise<InsertOneWriteOpResult> {
    return this.petService.save(7);
  }

}
