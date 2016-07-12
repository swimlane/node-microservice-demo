import * as Swagger from 'swagger-client';
import { Service } from 'typedi';
import * as config from 'config';

@Service()
export class PetSwagger {

  pet: any;
  
  constructor() {
    // TODO: Can't get this to extend correctly
    return new Swagger({ 
      url: config.get('spec.petstore'),
      usePromise: true
    });
  }

}
