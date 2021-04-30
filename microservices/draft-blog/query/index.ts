import express, { Application, Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const PORT = 4002;

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
  comments: CommentType[];
};

type CommentType = {
  id: string;
  content: string;
  status: string;
};

const posts: { [id: string]: PostType } = {};

app.get(
  "/posts",
  async (req: Request, res: Response): Promise<Response> => {
    return res.send(posts);
  }
);

const handleEvent = (type: string, data: any): void => {
  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, postId, content, status } = data;

    posts[postId].comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, postId, content, status } = data;

    const post = posts[postId];

    const comment: any = post.comments.find((comment) => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
};

app.post(
  "/events",
  async (req: Request, res: Response): Promise<Response> => {
    const { type, data } = req.body;

    handleEvent(type, data);

    return res.send({});
  }
);

app.listen(PORT, async () => {
  console.log(`Listening ${PORT}`);

  const res = await axios.get("http://event-bus-srv:4005/events");

  for (let event of res.data) {
    console.log(`Processing event: ${event.type}`);

    handleEvent(event.type, event.data);
  }
});
