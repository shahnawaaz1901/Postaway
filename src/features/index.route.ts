import { Router } from "express";
import userRouter from "./users/user.route";
import postRouter from "./posts/post.route";
import likeRouter from "./likes/like.router";
import commentRouter from "./comments/comment.router";
import friendRouter from "./friends/friend.router";
import jwtAuth from "../middlewares/jwt.auth";

const indexRouter = Router();

indexRouter.use("/api/users", userRouter);
indexRouter.use("/api/posts", jwtAuth, postRouter);
indexRouter.use("/api/likes", jwtAuth, likeRouter);
indexRouter.use("/api/comments", jwtAuth, commentRouter);
indexRouter.use("/api/friends", jwtAuth, friendRouter);

export default indexRouter;
