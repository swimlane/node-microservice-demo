import * as winston from 'winston';
import * as config from 'config';

export const logger = new winston.Logger();

const env = config.util.getEnv('NODE_ENV');

// Development Logger
if(env === 'development') {
  logger.configure({
    level: 'debug',
    transports: [
      new winston.transports.Console({
        type: 'verbose',
        colorize: true,
        prettyPrint: true,
        handleExceptions: true,
        humanReadableUnhandledException: true
      })
    ]
  });
}

process.on('unhandledRejection', function (reason, p) {
  logger.warn('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
