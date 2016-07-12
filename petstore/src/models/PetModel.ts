import * as Swagger from 'swagger-client';
import { Service } from 'typedi';

@Service()
export class PetModel {

  client: any;

  constructor() {
    this.client = new Swagger({
      url: 'http://petstore.swagger.io/v2/swagger.json',
      usePromise: true
    });
  }

}
