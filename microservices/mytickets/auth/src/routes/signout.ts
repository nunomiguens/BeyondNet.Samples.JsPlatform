import express, { Request, Response } from "express";

const router = express.Router();

router.post(
  "/api/users/signout",
  async (req: Request, res: Response): Promise<Response> => {
    req.session = null;
    return res.send({});
  }
);

export { router as signoutRouter };
