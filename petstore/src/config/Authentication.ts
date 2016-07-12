import * as expressJwt from 'express-jwt';
import * as config from 'config';

export function setupJwt() {
  const jwtSecret = config.get('auth.jwt_secret').toString();
  return expressJwt({
    secret: new Buffer(jwtSecret, 'base64')
  });
}
