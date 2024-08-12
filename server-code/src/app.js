const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Working");
});

app.get("/product", (req, res) => {
  res.send("Hello Working");
});

// client error handling
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

// server error handling

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
