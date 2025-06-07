import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function validateParams(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msgs = errors.array().map((e) => e.msg);
    return res.status(422).json({ errors: msgs });
  }
  next();
}
