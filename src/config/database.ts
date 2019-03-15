import * as mongoose from "mongoose";
import environment from "./environment";

mongoose.connect(environment.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
});
const db = mongoose.connection;

export default db;
