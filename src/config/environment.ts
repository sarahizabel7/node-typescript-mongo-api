import * as dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
  MONGODB_URI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/example_db",
  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "secret",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};
