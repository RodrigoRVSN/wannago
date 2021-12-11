/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: false,
    skipWaiting: false,
    dynamicStartUrl: false, // pre-cache home
    buildExcludes: [/middleware-manifest\.json$/],
  },
});
