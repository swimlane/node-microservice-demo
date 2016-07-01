import { Request, Response } from 'express';
import { Controller, Get, Req, Res } from 'routing-controllers';
import * as Swagger from 'swagger-client';

@Controller('/admin')
export class AdminController {

  client: any;

  constructor() {
    // swagger client
    this.client = new Swagger({
      url: 'http://petstore.swagger.io/v2/swagger.json'
    });
  }

  @Get('/')
  async get(): Promise<any> {
    return 'YES!';

    //let pet = await this.client.pet.getPetById(
    //  { petId: 7 }, { responseContentType: 'application/json' });
    // console.log('PET', pet);
  }

}

