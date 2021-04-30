import { errorHandler } from "./middlewares/error-handler";
import express, { Application } from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";

const PORT = 3000;

const app: Application = express();
app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler);

const startUp = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("MongoDB database connected.");
  } catch (error) {
    console.log(error);
  }

  app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
  });
};

startUp();
