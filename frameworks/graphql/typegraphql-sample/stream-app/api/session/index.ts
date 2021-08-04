import { connect } from "mongoose";

export default async function createSession() {
  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    throw new Error("Missing MONGO URL");
  }

  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  };

  await connect(MONGO_URL, options);
}
