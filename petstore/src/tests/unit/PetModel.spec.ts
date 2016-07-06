import { expect } from 'chai';
import { PetModel } from '../../models/PetModel';

describe('PetModel', () => {

  it('Pets should return 200', (done) => {
    let name = 'panda';
    let model = new PetModel(name);
    expect(model.name).to.be.equal(name);
    done();
  });
  
});
