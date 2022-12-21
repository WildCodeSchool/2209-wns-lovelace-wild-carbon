import 'reflect-metadata';

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server';

import { buildSchema } from 'type-graphql';
import CategoryRepository from './models/Category/Category.repository';
import CategoryResolver from './resolvers/Category.resolver';

const startServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [CategoryResolver],
    }),
    csrfPrevention: true,
    cache: 'bounded',
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
  await CategoryRepository.initializeRepository();

  await CategoryRepository.initializeCategories();

  console.log(`🚀  Server ready at ${url}`);
};

startServer();
