/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',

    register: false,
    skipWaiting: false,
    dynamicStartUrl: false, // pre-cache home
    buildExcludes: [/middleware-manifest\.json$/],
  },
});
