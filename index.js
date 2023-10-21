import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./_db.js";

// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },

    authors() {
      return db.authors;
    },

    reviews() {
      return db.reviews;
    },

    review(_, args) {
      return db.reviews.find(() => review.id === args.id);
    },
  },
};

// server setup
const server = new ApolloServer({
  // Apolloserver takes an objects as arguements
  //   the object takes two properties
  // *typeDefs -- definitions of types of data
  // *resolvers
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port`, 4000);
