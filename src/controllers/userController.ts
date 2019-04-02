import models from "../models/index";
import { Request, Response } from "express";
import { IUserModel } from "../interfaces/Models";
import * as passport from "passport";

export default class UserController {
  public authenticate = async (
    req: Request,
    res: Response,
    next: any
  ): Promise<any> => {
    const {
      body: { email, password }
    } = req;
    if (!email) {
      return res.status(200).send({
        status: "error",
        data: { error: "Email is required." }
      });
    }

    if (!password) {
      return res.status(200).send({
        status: "error",
        data: { error: "Password is required." }
      });
    }

    return passport.authenticate(
      "local",
      { session: false },
      (err, passportUser, info) => {
        if (err) return next(err);

        if (passportUser) {
          const user = passportUser;
          user.token = user.generateJWT();
          return res.status(200).send({
            status: "ok",
            data: user.toAuthJSON()
          });
        }

        return res.status(400).send({
          status: "error",
          data: { error: info }
        });
      }
    )(req, res, next);
  };

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;
    const finalUser: IUserModel = new models.User(user);
    finalUser.password = finalUser.setPassword(user.password);
    finalUser
      .save()
      .then(() =>
        res.status(201).send({
          status: "ok",
          data: finalUser.toAuthJSON()
        })
      )
      .catch((err: any) => {
        console.log(err.toString());
        return res.status(500).send({
          status: "error",
          data: { error: "Error to create user." }
        });
      });
  };

  public updateUser = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;
    models.User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          email,
          password
        }
      },
      { new: true },
      (err, userUpdated) => {
        if (err) {
          return res.status(500).send({
            status: "error",
            data: { error: "Error to update user." }
          });
        }
        if (!userUpdated) {
          return res.status(404).send({
            status: "error",
            data: { error: "User not found." }
          });
        }
        res.status(200).send({
          status: "ok",
          data: userUpdated
        });
      });
  };

  public getUser = async (req: Request, res: Response): Promise<any> => {
    models.User.findById(req.params.id, { password: 0 }, (err, user) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          data: { error: err.toString() }
        });
      }
      if (!user) {
        return res.status(404).send({
          status: "error",
          data: { error: "User not found." }
        });
      }
      return res.status(200).send({
        status: "ok",
        data: user
      });
    });
  };
}
