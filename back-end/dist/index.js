"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const Category_repository_1 = __importDefault(require("./models/Category/Category.repository"));
const Category_resolver_1 = __importDefault(require("./resolvers/Category.resolver"));
const startServer = async () => {
    const server = new apollo_server_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [Category_resolver_1.default],
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
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true })],
    });
    // The `listen` method launches a web server.
    const { url } = await server.listen();
    await Category_repository_1.default.initializeRepository();
    await Category_repository_1.default.initializeCategories();
    console.log(`🚀  Server ready at ${url}`);
};
startServer();
