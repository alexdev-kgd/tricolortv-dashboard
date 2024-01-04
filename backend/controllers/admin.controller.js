import jwt from "jsonwebtoken";
import db from "../models/index.js";
import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";

const SECRET_KEY = "alex";
const SALT_ROUNDS = 10; // The number of salt rounds for bcrypt hashing

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const generateToken = (user) => {
  return jwt.sign({ id: user.id, login: user.login }, SECRET_KEY, {
    expiresIn: "12h",
  });
};

export const adminSignin = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const { login, password } = req.body;

  Admin.findOne({ login: login }, async (err, admin) => {
    if (err || !admin) {
      res.status(404).json({ error: "Error fetching admin data" });
    } else {
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (isPasswordValid) {
        const token = generateToken(admin);
        // res.cookie("token", token, { httpOnly: true, sameSite: "strict" });
        return res.json({ token });
      }
    }
  });
};

export const getAdminProfileByLogin = async (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  const login = req.params.login;

  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    if (decodedToken) {
      Admin.findOne({ login: login }, async (err, admin) => {
        if (err || !admin) {
          res.status(404).json({ error: "Error fetching admin data" });
        } else {
          res.status(200).json(admin);
        }
      });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  try {
    const revokedToken = new tokenRevocationModel({
      token,
    });

    await revokedToken.save((err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error revoking token" });
      } else {
        res.status(200).json({ message: "Token revoked successfully" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
