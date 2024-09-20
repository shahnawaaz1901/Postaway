import { Router } from "express";
import LikeController from "./like.controllet";

const likeRouter = Router();
const likeController: LikeController = new LikeController();

export default likeRouter;
