import * as mongoose from "mongoose";

const articleModel = (mongoose) => {
  const Article = mongoose.model(
    "Articles",
    mongoose.Schema(
      {
        id: Number,
        title: String,
        datePublished: String,
        authorId: Number,
        content: String,
      },
      { timestamps: true },
    ),
  );
  return Article;
};

export default articleModel;
