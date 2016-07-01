import { Request, Response } from 'express';
import { Controller, Get, Req, Res } from 'routing-controllers';
import * as Swagger from 'swagger-client';

@Controller('/admin')
export class AdminController {

  client: any;

  constructor() {
    // swagger client
    this.client = new Swagger({
      url: 'http://petstore.swagger.io/v2/swagger.json',
      usePromise: true
    });
  }

  @Get('/')
  async get(): Promise<any> {
    let client = await this.client

    let pet = await client.pet.getPetById(
      { petId: 7 }, { responseContentType: 'application/json' });

    return pet;
  }

}

