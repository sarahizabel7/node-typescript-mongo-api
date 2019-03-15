import { model } from "mongoose";
import * as iModels from "../interfaces/Models";
const UserSchema = require("./User");

export default {
  User: model<iModels.IUserModel>("User", UserSchema)
};
