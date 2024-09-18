import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "refer",
    refer: ["User", "Post"],
    required: true,
  },
});

export const LikeModel = mongoose.model("Like", likeSchema);
