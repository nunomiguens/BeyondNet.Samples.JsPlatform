import express, { Application, Request, Response } from "express";
import { randomBytes } from "crypto";
import cors from "cors";
import axios from "axios";

const PORT = 4000;

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

type PostType = {
  id: string;
  title: string;
};

const posts: { [id: string]: PostType } = {};

app.get(
  "/posts",
  async (_req: Request, res: Response): Promise<Response> => {
    return res.send(posts);
  }
);

app.post(
  "/posts/create",
  async (req: Request, res: Response): Promise<Response> => {
    const id = randomBytes(4).toString("hex");

    const { title } = req.body;

    const newPost: PostType = { id, title };

    posts[id] = newPost;

    await axios.post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: { id, title },
    });

    return res.status(201).send(newPost);
  }
);

app.post(
  "/events",
  async (req: Request, res: Response): Promise<Response> => {
    console.log(`Received event: ${req.body.type}`);
    return res.send({});
  }
);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});
