import { expect } from 'chai';
import { PetModel } from '../../models/PetModel';

describe('PetModel', () => {

  it('Pets name should be Panda', (done) => {
    let name = 'panda';
    let model = new PetModel(name);
    expect(model.name).to.be.equal(name);
    done();
  });
  
});
