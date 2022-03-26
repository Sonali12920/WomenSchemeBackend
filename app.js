import express from "express";
import mongoose from "mongoose";
//const express = require('express');
//const mongoose = require("mongoose");

const app = express();

const db =
  "mongodb+srv://minorproj:minor2022@cluster0.lywnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("not connected");
  });

const middleware = (req, res, next) => {
  console.log("Middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/scholarships", middleware, (req, res) => {
  res.send("Helloooo");
});

app.listen(3000, () => {
  console.log("server is running");
});
