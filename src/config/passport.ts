import * as passport from "passport";
const LocalStrategy = require("passport-local");

import models from "../models/index";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email: string, password: string, done: any) => {
      models.User.findOne({ email }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }
        if (!user.validatePassword(password, user.password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      }).catch(done);
    }
  )
);
