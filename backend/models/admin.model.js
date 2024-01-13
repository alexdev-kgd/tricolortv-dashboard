import * as mongoose from "mongoose";

const Admin = mongoose.model(
  "Admins",
  mongoose.Schema(
    {
      login: String,
      password: String,
    },
    { timestamps: true },
  ),
);

export default Admin;
