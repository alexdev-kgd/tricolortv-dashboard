import * as mongoose from "mongoose";

const articleModel = (mongoose) => {
  const Article = mongoose.model(
    "Article",
    mongoose.Schema(
      {
        id: Number,
        title: String,
        date: String,
        content: String,
        authorId: Number
      },
      { timestamps: true },
    ),
  );
  return Article;
};

export default articleModel;
