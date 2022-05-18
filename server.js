import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginCacheControl } from "apollo-server-core";

const typeDefs = gql`
  schema {
    query: Query
  }
  
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "hello",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`server running at ${url}`);
