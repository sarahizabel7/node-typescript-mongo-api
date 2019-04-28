# RESTful API using Node.js, Express, TypeScript & Mongoose

## Prerequisites

[NodeJS](https://nodejs.org/en/download/) and [MongoDB](https://docs.mongodb.com/manual/administration/install-community/).

## Features

- [TypeScript](https://www.typescriptlang.org/) as Language

- Framework: [Express.js](https://expressjs.com/)

- ODM: [Mongoose](https://mongoosejs.com/)

- Authentication & Authorization with [JSON Web Tokens](https://jwt.io/) and [Passport.js](http://www.passportjs.org/)

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Rename the file `.env.example` to `.env`, and configure the file `environment.ts` located in `src/config`

2. Start the app using `npm start`

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
| `POST`   | `/user`     | Create a new user in the DB. You need to specify in the body the following attributes: name, email & password.                        |
| `POST`   | `/authenticate` | Sign in with the email & password. If it's successful, then generates a token.                                                            |
| `GET`    | `/user/:id`    | It returns the specified id user. You need to specify the token in the header with the following format: `Authorization: Token your-token` |
| `PUT`    | `/user/:id`    | Updates an already created user in the DB.                                                                                                   |

### Available scripts

- `start` - Run the transpiled app
- `build` - Transpile TypeScript to ES6
- `dev` - Transpile TypeScript to ES6 and run the transpiled app with Nodemon

## License

MIT © Sarah Pfaffenzeller


```javascript
{ 
    "name": "Matheus Medeiros Gentil",
    "age": 25,
    "gender": "male",
    "phone": {
        "region": "55",
        "number": "48996071785"
    },
    "address": {
        "country": "Brazil",
        "state": "Santa Catarina",
        "city": "Florianópolis",
        "district": "Trindade",
        "street": "Luiz Oscar de Carvalho 75"
    },
    "graduation": {
        "name": "Information Systems",
        "university": "UFSC",
        "startDate": "2013-08-01",
        "endDate": "2019-12-10"
    },
    "softSkills": ["Leadership", "Team Work", "Proactivity", "Self-taught", "Communicative"],
    "techSkills": {
        "front": ["HTML", "CSS", "React", "Redux", "Webpack", "SemanticUI", "Materialize"],
        "back": ["NodeJS", "MongoDB", "PostgreSQL"],
        "mixed": ["Javascript", "Typescript", "GIT", "Deploy", "AWS"]
    },
    "hobbies": ["Play video games", "Watch movies and series", "Read books", "Play poker", "Watch NBA games"],
    "aspirations": ["Generate value for society", "Have my own company"]
}
```
