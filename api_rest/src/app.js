import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database";

import express from "express";

import homeRoute from "./routes/home";
import userRoute from "./routes/user";
import tokenRoute from "./routes/token";
import alunoRoute from "./routes/aluno";
import photoRoute from "./routes/photo";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images', express.static(resolve(__dirname, '..', "uploads", "images")));
  }

  routes() {
    this.app.use("/", homeRoute);
    this.app.use("/users/", userRoute);
    this.app.use("/token/", tokenRoute);
    this.app.use("/alunos/", alunoRoute);
    this.app.use("/photos/", photoRoute);
  }
}

export default new App().app;
