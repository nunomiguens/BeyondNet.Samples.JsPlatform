import express, { Application, Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const PORT = 4003;

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post(
  "/events",
  async (req: Request, res: Response): Promise<Response> => {
    const { type, data } = req.body;

    if (type === "CommandCreated") {
      const status = data.content.includes("orange") ? "rejected" : "approved";

      await axios.post("http://event-bus-srv:4005/events", {
        type: "CommentModerated",
        data: {
          id: data.id,
          postId: data.postId,
          content: data.content,
          status,
        },
      });
    }

    return res.send({});
  }
);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});
