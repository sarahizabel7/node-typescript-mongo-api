import * as jwt from "express-jwt";
import environment from "../config/environment";

const getTokenFromHeaders = (req: any) => {
  const {
    headers: { authorization }
  } = req;
  if (authorization && authorization.split(" ")[0] === "Token") {
    return authorization.split(" ")[1];
  }
  return null;
};

export const auth = {
  required: jwt({
    secret: environment.JWT_ENCRYPTION,
    userProperty: "payload",
    getToken: getTokenFromHeaders
  }),
  optional: jwt({
    secret: environment.JWT_ENCRYPTION,
    userProperty: "payload",
    getToken: getTokenFromHeaders,
    credentialsRequired: false
  })
};
