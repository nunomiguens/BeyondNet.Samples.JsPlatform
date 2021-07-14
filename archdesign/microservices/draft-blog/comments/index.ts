import express, { Application, request, Request, Response } from "express";
import { randomBytes } from "crypto";
import cors from "cors";
import axios from "axios";

const PORT = 4001;

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

type CommentType = {
  id: string;
  content: string;
  status: string;
};

const commentsByPostId: { [postId: string]: CommentType[] } = {};

app.get(
  "/posts/:id/comments",
  async (req: Request, res: Response): Promise<Response> => {
    return res.send(commentsByPostId[req.params.id] || []);
  }
);

app.post(
  "/posts/:id/comments",
  async (req: Request, res: Response): Promise<Response> => {
    const commentId = randomBytes(4).toString("hex");
    const id = req.params.id;
    const { content } = req.body;

    const comments: CommentType[] = commentsByPostId[id] || [];

    comments.push({ id: commentId, content, status: "pending" });

    commentsByPostId[id] = comments;

    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentCreated",
      data: { id: commentId, content, postId: id, status: "pending" },
    });

    return res.status(201).send(comments);
  }
);

app.post(
  "/events",
  async (req: Request, res: Response): Promise<Response> => {
    console.log(`Received event: ${req.body.type}`);

    const { type, data } = req.body;

    if (type === "CommentModerated") {
      const { postId, id, status, content } = data;

      const comments = commentsByPostId[postId];

      const comment: any = comments.find((comment) => {
        return comment.id === id;
      });

      comment.status = status;

      await axios.post("http://event-bus-srv:4005/events", {
        type: "CommandUpdated",
        data: { id, status, postId, content },
      });
    }

    return res.send({});
  }
);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});
