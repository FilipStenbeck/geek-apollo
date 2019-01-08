const { gql } = require('apollo-server');
const { hotgames } = require('./resolvers/hotgames');
const { game } = require('./resolvers/game');


const typeDefs = gql`

  type Description {
    intro: String,
    main: String
  }
  type Game {
    id: ID,
    name: String,
    rank: String,
    yearpublished: String,
    thumbnail: String,
    image: String
    description: Description
  }
  type Query {
    hotgames: [Game]
    game(id: String!): Game
  }
`;

const resolvers = {
  Query: {
    hotgames: () => hotgames(),
    game: (parent, args) => game(args.id)
  },

};
module.exports = { typeDefs, resolvers };
