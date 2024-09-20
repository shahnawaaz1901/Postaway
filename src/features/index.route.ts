import { Router } from "express";
import userRouter from "./users/user.route";
import postRouter from "./posts/post.route";
import likeRouter from "./likes/like.router";
import commentRouter from "./comments/comment.router";
import friendRouter from "./friends/friend.router";

const indexRouter = Router();
indexRouter.use("/users", userRouter);
indexRouter.use("/posts", postRouter);
indexRouter.use("/likes", likeRouter);
indexRouter.use("/comments", commentRouter);
indexRouter.use("/friends", friendRouter);

export default indexRouter;
