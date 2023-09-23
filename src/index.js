const express = require("express");
const app = express();
const path = require("path");
const port = 4500;
const hbs = require("hbs");
const templatePath = path.join(__dirname, "../templates");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);


app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("/signup");
});



app.listen(port, (req, res) => {
  console.log(`server is running on  Port ${port}`);
});