import { EventSubscriber, On } from 'event-dispatch';

@EventSubscriber()
export class PetSubscriber {

  @On('onPetCreate')
  onPetCreate(socket, name: string) {
    // console.log("User " + user.name + " created!");
  }

}
