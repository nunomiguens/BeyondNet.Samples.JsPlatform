import { Request, Response, NextFunction } from "express";
import { NotAuthorizeError } from "../errors/not-authorize.error";

export const requireAuth = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) throw new NotAuthorizeError();
  next();
};
