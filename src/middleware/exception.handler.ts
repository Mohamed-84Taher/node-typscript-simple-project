import { Request, Response, NextFunction } from "express";

/**
 * Middleware for errors global manager
 * @param err - exress error
 * @param req - intiale request
 * @param res - response object
 * @param next - lets pass to next middleware if exists
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const ExceptionHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.status && err.error) {
    return res.status(err.status).json({ error: err.error });
  }
  res.status(500).json({ error: "Internal server error" });
};
