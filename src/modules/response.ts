import { Response } from "express";

export default class Responses {
  static generateSuccessResponse(res: Response, statuCode: number, data: any) {
    res.status(statuCode).json({ success: true, ...data });
  }
  static generateErrorResponse(res: Response, statuCode: number, errData: any) {
    res.status(statuCode).json({ success: false, ...errData });
  }
}
