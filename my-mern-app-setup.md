# profile_react # my-mern-app

## GOAL: Build a fullstack MERN App

## Steps

### 1. Setup the server.js

- Create your `server.js` file.
- Run `npm init -y`
- Run `npm install express mongoose dotenv if-env path`
- Build out the basic server

```javascript
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/profile_react",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
```

### 2. Add create-react-app client on top.

- In the root, run `npx create-react-app client --use-npm`
- Run `npm install concurrently -D`
- Add script: `"client": "cd client && npm run start",` to server package.json

- Add script `"start-dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",` to server package.json
- Add `"proxy": "http://localhost:3001",` to the client package.json

#### Testing and Validation

- Install axios in the client directory
- Make an API call to the `/api/config` route and log it to the console.

### 3. Set the app up for Production

- Update the scripts object in the server package.json:

```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
  },
```

- Add build folder static and route to server.js

```javascript
app.use(express.static("client/build"));
```

```javascript
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
```

# Deploy your MERN Application to Heroku

This guide will take you through the process of deploying a full MERN Stack application to Heroku. We could normally host our standard React applications on GitHub Pages, but now that we have MySQL or MongoDB, Node, Express AND React we will need to utilize Heroku for hosting our application.

> **Note**: Please ensure your app functions properly locally with no errors. Fix any errors that are occurring or you can expect your application to not deploy.

We have also created a video guide that you can use along with this guide to help you through the process.
[MERN to Heroku.](https://www.youtube.com/watch?v=qXIG8iKO7Fo&feature=youtu.be&list=PLOFmg4xbN_TPrB6w4rThsFanVxJI_SfER)

> **Note:** The above guide uses mLab through Heroku to provision a MongoDB database. As of November 2020, this will no longer be an option, so please refer to our [Mongo Atlas deployment guide](./MongoAtlas-Deploy.md) for updated instructions on how to deploy to Heroku with MongoDB.

- Many of the steps associated with this guide are similar to other deployment guides you were previously provided, so those steps will not be covered. If you need these again, check your class repository!

1. The first thing you will need is a GitHub Repository. When creating this repository be sure to create it with a Node `.gitignore` file. This is so we can ignore our `node_modules` folder since we don't want that being tracked by git.

2. Now that we have created a repository, go to [Heroku](https://www.heroku.com) and login to your account. Create a new app and follow the steps from our GitHub Heroku Connect guide to link your GitHub Repo to your Heroku app.

> **Note:** Be sure to `Enable Automatic Deployments` after linking your Repo with your Heroku App.

3. Now that your repo and Heroku app are connected, provision the proper add-on for the database you will be using. `JawsDB` for MySQL or Mongo Atlas for MongoDB.

4. For the purposes of this guide, we will be using Mongo Atlas and MongoDB, so take a moment and get your application set up with a production ready database with [this guide on deploying with Mongo Atlas.](./MongoAtlas-Deploy.md)

5. Now that this is done, we want to be sure to use our `client/build` folder when running on production. You will need this line of code in your `server.js`:

```js
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
```

6. Since the `client/build` folder is a static folder that has to be generated, make sure to run `yarn build` before pushing to GitHub/Heroku if you've made changes to the `client` folder in your app.

7. Finally you need to make sure that your `PORT` variable is set to use either the port heroku designates, or a port of your choosing. The result should resemble this code:

```js
const PORT = process.env.PORT || 3001;
```
