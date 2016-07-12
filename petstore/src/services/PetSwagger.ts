import * as Swagger from 'swagger-client';
import { Service } from 'typedi';
import * as config from 'config';

@Service()
export class PetSwagger {

  client: any;
  
  constructor() {
     // TODO: Can't get this to extend correctly
    this.client = new Swagger({ 
      // TODO: spec.petstore doesn't work ...
      url: config.get('petstore'),
      usePromise: true
    });
  }

}
