import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import SpendingRepository from './models/Spending/Spending.repository';
import { ExpressContext } from 'apollo-server-express';
import SpendingResolver from './resolvers/Spending/Spending.resolver';
import { initializeDatabaseRepositories } from './database/utils';
import CategoryRepository from './models/Category/Category.repository';
import ArticleRepository from './models/Article/Article.repository';
import ArticleResolver from './resolvers/Article/Article.resolver';
import AppUserResolver from './resolvers/AppUser/AppUser.resolver';
import AppUserRepository from './models/AppUser/AppUser.repository';
import { getSessionIdInCookie } from './http-utils';
import AppUser from './models/AppUser/AppUser.entity';
import { IS_PRODUCTION } from './config';
import FriendshipResolver from './resolvers/FriendShip/FriendShip.resolver';

export type GlobalContext = ExpressContext & {
  user: AppUser | null;
};

const startServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        SpendingResolver,
        ArticleResolver,
        AppUserResolver,
        FriendshipResolver,
      ],
      authChecker: async ({ context }) => {
        return Boolean(context.user);
      },
    }),
    context: async (context): Promise<GlobalContext> => {
      const sessionId = getSessionIdInCookie(context);
      const user = !sessionId
        ? null
        : await AppUserRepository.findBySessionId(sessionId);

      return { res: context.res, req: context.req, user };
    },
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
  await initializeDatabaseRepositories();
  await CategoryRepository.initializeCategories();

  console.log(`🚀  Server ready at ${url}`);
};

startServer();
