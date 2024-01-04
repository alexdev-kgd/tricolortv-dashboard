import dbConfig from "../config/db.config.js";
import * as mongoose from "mongoose";
import articleModel from "./article.model.js";

const db = {
  mongoose,
  url: dbConfig.url,
  model: (articleModel(mongoose)),
};

export default db;
