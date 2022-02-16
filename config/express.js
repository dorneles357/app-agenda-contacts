const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

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

  consign({ cwd: "app" })
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

  return app;
};
