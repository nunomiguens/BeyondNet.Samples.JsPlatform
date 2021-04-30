import express, { Request, Response } from "express";
import { body, ValidationChain } from "express-validator";
import { BadRequestError } from "../errors";
import jwt from "jsonwebtoken";

import { validateRequest } from "../middlewares/validate-request";
import User from "../models/user";
import Password from "../services/password";

const router = express.Router();

const guards: ValidationChain[] = [
  body("email").isEmail().withMessage("Email must be valid."),
  body("password").trim().notEmpty().withMessage("You must supply a password."),
];

router.post(
  "/api/users/signin",
  guards,
  validateRequest,
  async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) throw new BadRequestError("User does not exists.");

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );

    if (!passwordsMatch) throw new BadRequestError("Invalid credentials");

    if (!process.env.JWT) throw new Error("Key for JWT does not exists");

    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
      },
      process.env.JWT
    );

    req.session = { jwt: userJwt };

    return res.status(201).send(existingUser);
  }
);

export { router as signinRouter };
