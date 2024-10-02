import { Request, Response, NextFunction } from "express";
import ApplicationError from "../errors/ApplicationError";
import Token from "../utils/token";

const jwtAuth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader: string | undefined = req.headers["authorization"];
    if (!authHeader) {
      throw new ApplicationError(401, "UnAuthorized Access");
    }

    const [bearer, authToken] = authHeader.split(" ");
    if (bearer != "Bearer" || !authToken) {
      throw new ApplicationError(400, "Invalid Token ");
    }
    const payload: any = Token.validateToken(authToken, "Access");
    req.body.id = payload.id;
  } catch (error: any) {
    next(error);
  }
};
export default jwtAuth;
