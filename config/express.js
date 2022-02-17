const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

module.exports = function () {
  const app = express();

  //middleware config ambiente
  app.set("port", process.env.PORT_DEV);

  //middleware
  app.use(express.static("./public"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require("method-override")());

  //middleware template engine
  app.set("view engine", "ejs");
  app.set("views", "./app/views");

  app.use(cookieParser());
  app.use(session(
    {
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true
    }
  ));
  app.use(passport.initialize());
  app.use(passport.session());

  consign({ cwd: "app" })
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

  return app;
};
