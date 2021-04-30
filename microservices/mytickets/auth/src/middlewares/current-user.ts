import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface userPayload {
  id: string;
  email: string;
}

// INFO: Add new property to the original Request express's class
declare global {
  namespace Express {
    interface Request {
      currentUser?: userPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) return next();

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT!
    ) as userPayload;
    req.currentUser = payload;
  } catch (error) {}

  next();
};
