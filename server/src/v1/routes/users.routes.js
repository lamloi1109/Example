const express = require("express");
const routes = express.Router();
const users = require("../models/users.models");
const createError = require("http-errors");
const { createUser } = require("../controllers/users.controllers");

routes.post("/users/login", (req, res, next) => {
  res.send("Login");
});
routes.post("/users/register", createUser);

routes.post("users/refesh-token", (req, res, next) => {
  res.send("Refesh-token");
});

routes.post("/users/logout", (req, res, next) => {
  res.send("Logout");
});

// Get a list of all user

routes.get("/users", (req, res, next) => {
  next(createError.InternalServerError("This a error"));

  res.send("Get a list of all user.");
});

// Get a user
routes.get("/users/id", (req, res, next) => {
  res.send("Get a user with userId");
});
// Delete a user
routes.delete("/users/id", (req, res, next) => {
  res.send("Delete a user with userId");
});
// Create a user
routes.post("/users/", (req, res, next) => {
  res.send("Create a user");
});
// Update a user
routes.patch("/users/id", (req, res, next) => {
  res.send("Update a user");
});

module.exports = routes;
