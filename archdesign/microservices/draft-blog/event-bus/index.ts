import express, { Application, Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const PORT = 4005;

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const events: any = [];

app.post(
  "/events",
  async (req: Request, res: Response): Promise<Response> => {
    const event = req.body;

    events.push(event);

    axios.post("http://posts-clusterip-srv:4000/events", event);
    axios.post("http://comments-clusterip-srv:4001/events", event);
    axios.post("http://query-clusterip-srv:4002/events", event);
    axios.post("http://moderation-clusterip-srv:4003/events", event);

    return res.send({ status: "OK" });
  }
);

app.get(
  "/events",
  async (req: Request, res: Response): Promise<Response> => {
    return res.send(events);
  }
);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});
