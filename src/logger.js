const winston = require('winston');
require('winston-loggly-bulk');

if (process.env.NODE_ENV === 'production') {
  winston.add(winston.transports.Loggly, {
    token: process.env.RELISTEN_SONOS_LOGGLY_TOKEN,
    subdomain: 'relisten',
    tags: ['Winston-NodeJS'],
    json: true
  });
}

const I = require('instrumental-agent');

I.configure({
  apiKey: process.env.INSTRUMENTAL_KEY,
  enabled: process.env.NODE_ENV === 'production'
});

winston.I = I;

module.exports = winston;
