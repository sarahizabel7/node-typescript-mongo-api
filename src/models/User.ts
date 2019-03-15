import { Schema } from 'mongoose';
import * as jwt from 'jsonwebtoken'
const bcrypt = require("bcryptjs");
const saltRounds = 10;

const userSchema = new Schema({
  name: {
		type: String,
		required: [true, 'name is required.'],
		select: true
  },
  email: {
    type: String,
    required: [true, 'email is required.'],
    unique: true,
    select: true
	},
	password: {
    type: String,
    required: [true, 'password is required.'],
    select: true
	}
}, {
  timestamps: true
});

userSchema.methods.setPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

userSchema.methods.validatePassword = (passwordLogin: string, passwordModel: string) => {
  return bcrypt.compareSync(passwordLogin, passwordModel);
};

userSchema.methods.generateJWT = function() {

  return jwt.sign({
    email: this.email,
    id: this._id,
  }, 'secret', { expiresIn: '24h' });
};

userSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

export = userSchema;