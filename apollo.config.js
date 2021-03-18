module.exports = {
  client: {
    service: {
      name: 'swapi',
      url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    },
    includes: ['src/**/*.graphql'],
    excludes: ['src/**/*.{ts}'],
  },
};
