const { ApolloServer } = require('apollo-server');
const {typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    console.log({query: req.body.query});
  },
  formatResponse: response => {
    console.log({response});
    return response;
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
