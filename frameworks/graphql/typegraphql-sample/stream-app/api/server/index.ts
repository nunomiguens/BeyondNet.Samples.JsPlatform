import "./env";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";

import createSchema from "../schema";
import createSession from "../session";

const port = process.env.PORT || 8000;

async function createServer() {
  try {
    await createSession();

    const app = express();

    const corsOptions = {
      origin: process.env.ORIGIN_CLIENT,
      credentials: true,
    };

    app.use(cors(corsOptions));
    app.use(express.json());

    const schema = await createSchema();

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,
      playground: {
        settings: {
          "request.credentials": "include",
        },
      },
    });

    apolloServer.applyMiddleware({ app, cors: corsOptions });

    app.listen({ port }, () => {
      console.log(
        `Server is running at http://localhost:${port}${apolloServer.graphqlPath}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

createServer();
