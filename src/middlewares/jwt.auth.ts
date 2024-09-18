import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import ApplicationError from "../errors/ApplicationError";

const jwtAuth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader: string | undefined = req.headers["authorization"];
    if (!authHeader) {
      throw new ApplicationError(401, "UnAuthorized Access");
    }

    const authToken = authHeader.split(" ")[1];
    const { ACCESS_TOKEN_SECRET_KEY } = process.env;
    const payload: any = jwt.verify(
      authToken,
      ACCESS_TOKEN_SECRET_KEY as string
    );
    req.body.id = payload.id;
  } catch (error: any) {
    next(error);
  }
};
export default jwtAuth;
