const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!", time: Date() });
});

app.get("/topic", (req, res) => {
  res.send(req.query.id + "," + req.query.name);
});

app.listen(3000, () => {
  console.log("Connected 3000 port");
});
