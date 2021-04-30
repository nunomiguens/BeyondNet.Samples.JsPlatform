import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { ObjectId } from "mongodb";
import path from "path";

import { UserResolver } from "../resolvers/UserResolver";
import { AuthResolver } from "../resolvers/AuthResolver";
import { StreamResolver } from "../resolvers/StreamResolver";
import { ObjectIdScalar } from "./object-id.scalar";
import { TypegooseMiddleware } from "../middleware/typegoose";

//build typegraphql executable schema
export default async function createSchema(): Promise<GraphQLSchema> {
  const schema = await buildSchema({
    //add resolvers
    resolvers: [UserResolver, AuthResolver, StreamResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    //use document converting middleware
    globalMiddlewares: [TypegooseMiddleware],
    // use objectid scalar mapping
    scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    validate: false,
  });

  return schema;
}
