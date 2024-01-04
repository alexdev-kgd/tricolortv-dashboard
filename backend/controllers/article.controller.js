import db from "../models/index.js";
const Article = db.model;

export const create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const { name } = req.body;

  const newArticle = new Article({
    name,
  });

  newArticle.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error saving article data" });
    } else {
      console.log("saved");
      res.send("item saved to database");
      res.status(200).json({ message: "Article data saved successfully" });
    }
  });
};

export const get = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) {
      res.status(404).json({ error: "Error fetching article data" });
    } else {
      res.status(200).json({ message: "ok" });
      res.send(article);
    }
  });
};

export const getAll = (req, res) => {
  Article.find({}, (err, articleList) => {
    err ? res.json(err) : res.json(articleList);
  });
};
