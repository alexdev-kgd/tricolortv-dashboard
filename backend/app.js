import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./models/index.js";
import articleRoutes from "./routes/article.routes.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:4200",
};

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(logger('dev'));

app.use(articleRoutes);
app.use(adminRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});        