import * as passport from "passport";
const LocalStrategy = require("passport-local");

import models from "../models/index";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email: string, password: string, done: any) => {
      try {
        const user = await models.User.findOne({ email }).select("+password");
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.validatePassword(password, user.password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

