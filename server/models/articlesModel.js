import mongoose from "mongoose";

const aricleModel = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "user" },
  title: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 100,
  },
  content: {
    type: String,
    require: true,
    minLength: 500,
  },
  thumbnail: {
    type: String,
    require: true,
  },
  category: { type: mongoose.Types.ObjectId, ref: "category" },
});

export default mongoose.model("article", aricleModel);
