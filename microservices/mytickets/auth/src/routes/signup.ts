import express, { NextFunction, Request, Response } from "express";
import { body, ValidationChain } from "express-validator";
import "express-async-errors";
import { BadRequestError } from "./../errors";
import jwt from "jsonwebtoken";

import User from "../models/user";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

const guards: ValidationChain[] = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage("'Password mus be between 6 and 20 characters"),
];

router.post(
  "/api/users/signup",
  guards,
  validateRequest,
  async (req: Request, res: Response, _next: NextFunction) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) throw new BadRequestError("Email in use.");

    const user = User.build({ email, password });

    await user.save();

    if (!process.env.JWT) throw new Error("Key for JWT does not exists");

    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT
    );

    req.session = { jwt: userJwt };

    return res.status(201).send(user);
  }
);

export { router as signupRouter };
