import express, { Request, Response } from "express";

import { currentUser } from "../middlewares/current-user";

const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  async (req: Request, res: Response): Promise<Response> => {
    return res.send(req.currentUser || null);
  }
);

export { router as currentUserRouter };
