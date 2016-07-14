import * as io from 'socket.io';
import * as passport from 'passport';
import * as glob from 'glob';
import * as path from 'path';
import { EventDispatcher } from 'event-dispatch';

let files = glob.sync('./dist/subscribers/*.js');
let subscribers = files.map(f => { 
  return require(path.resolve(f)); 
});

export function setupSockets(app) {
  let server = io(app);

  server.use((socket, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if(err) next(new Error('Error in passport authenticate'));
      if(!user) next(new Error('Failed to authenticate oAuth token'));
      socket.request.user = user;
      return next();
    })(socket.request, null, next);
  });

  server.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });

    // let eventDispatcher = new EventDispatcher();
    // eventDispatcher.dispatch('onPetCreate', { socket, name: 'foo' });

    // for(let event in subscribers) {
    //  console.log('ev', event);
    // }

    // var userId = socket.request.session.passport.user;
    // socket.on('my other event', function (data) {
    //  console.log(data);
    // });
  });

  return io;
};
