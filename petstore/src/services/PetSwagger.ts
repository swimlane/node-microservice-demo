import * as Swagger from 'swagger-client';
import { Service } from 'typedi';
import * as config from 'config';

@Service()
export class PetSwagger extends Swagger {

  pet: any;
  
  constructor() {
    super({ 
      url: config.get('spec.petstore'),
      usePromise: true
    });
  }

}
