const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");
const createError = require("http-errors");
//init dbs
require("./v1/databases/init.mongodb");
// require('./v1/databases/init.redis')

//user middleware
app.use(helmet());
app.use(morgan("combined"));
// compress responses
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//CORS
app.use(
  cors({
    origin: "http://localhost:3333",
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  })
);
// Init route
app.use(require("./v1/routes/index.routes"));

// Error Handling Middleware called

app.use((req, res, next) => {
  next(createError.NotFound("This route doesn't exist"));
});

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});

module.exports = app;
