import { Express } from "express";
import { auth } from "./auth";
import UserController from "../controllers/userController";

const controller = new UserController();

export default (app: Express) => {
  app.post("/authenticate", auth.optional, controller.authenticate);

  app.post("/user", auth.optional, controller.registerUser);

  app.put("/user/:id", auth.required, controller.updateUser);

  app.get("/user/:id", auth.required, controller.getUser);
};
