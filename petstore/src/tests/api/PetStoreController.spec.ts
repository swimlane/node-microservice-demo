import * as request from 'supertest';
import { expect } from 'chai';
import * as server from '../../index';

describe('PetStoreController', () => {

  it('Pets should return 200', (done) => {
    
    request(server.default.express.app)
      .get('/pets')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  
});
