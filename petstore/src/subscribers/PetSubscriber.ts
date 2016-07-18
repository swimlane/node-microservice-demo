import { EventSubscriber, On } from 'event-dispatch';

@EventSubscriber()
export class PetSubscriber {

  @On('onPetCreate')
  onPetCreate({ socket, name }) {
    // console.log('name', socket, name);
  }

}
