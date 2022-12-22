import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import SpendingRepository from "./models/Spending/Spending.repository";

import SpendingResolver from "./resolvers/Spending/Spending.resolver";
import { initializeDatabaseRepositories } from "./database/utils";


const startServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [SpendingResolver],
     
    }),
    
    csrfPrevention: true,
    cache: "bounded",
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
     **/
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  // The `listen` method launches a web server.
  const { url } = await server.listen();
  await initializeDatabaseRepositories();
  await SpendingRepository.initializeSpending();

  console.log(`🚀  Server ready at ${url}`);
};

startServer();
