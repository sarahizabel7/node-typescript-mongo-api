# RESTful API using Node.js, Express, TypeScript & Mongoose 

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Directory Structure](#directory-structure)
  - [Available Routes](#available-routes)
  - [Available Scripts](#available-scripts)
- [License](#license)

## Prerequisites

You need to install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/).

## Features

- [TypeScript](https://www.typescriptlang.org/) as Language

- Framework: [Express.js](https://expressjs.com/)

- ODM: [Mongoose](https://mongoosejs.com/)

- Authentication & Authorization with [JSON Web Tokens](https://jwt.io/) and [Passport.js](http://www.passportjs.org/)

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Start the app using `npm start`

3. After that, go to: `http://localhost:3000/user`

### Directory Structure

```
├── src
│   ├── config
│   │   ├── app.ts
│   │   ├── database.ts
│   │   ├── environment.ts
│   │   └── passport.ts
│   ├── controllers
│   │   └── userController.ts
│   ├── interfaces
│   │   ├── Entities.ts
│   │   └── Models.ts
│   ├── models
│   │   ├── index.ts
│   │   └── User.ts
│   ├── routes
│   │   ├── auth.ts
│   │   └── user.ts
│   ├── .env.example
│   └── server.ts
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

### Available routes

| Method   | Resource        | Description                                                                                                                                 |
| :------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `POST`   | `/users`     | Create a new user in the DB. You need to specify in the body the following attributes: name, email & password.                        |
| `POST`   | `/authenticate` | Sign in with the email & password. If it's successful, then generates a token.                                                            |
| `GET`    | `/users`        | Returns the collection of users present in the DB.                                                                                        |
| `GET`    | `/users/:id`    | It returns the specified id user. You need to specify the token in the header with the following format: `Authorization: Bearer your-token` |
| `PUT`    | `/users/:id`    | Updates an already created user in the DB                                                                                                   |
| `DELETE` | `/users/:id`    | Deletes a user from the DB                                                                                                                  |

### Available scripts

- `start` - Run the transpiled app
- `build` - Transpile TypeScript to ES6,
- `dev` - To run the app without transpile to ES6,
- `compile` - Remove dist, node_modules, coverage folders,

## License

MIT © Sarah Pfaffenzeller
