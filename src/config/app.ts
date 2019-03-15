import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import user from "../routes/user";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require("../models/User");
require("./passport");
user(app);
app.use(user);

export default app;
