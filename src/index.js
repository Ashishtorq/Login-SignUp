const express = require("express");
const app = express();
const path = require("path");
const port = 4500;
const hbs = require("hbs");
const async = require("hbs/lib/async");
const collection = require("./mongoose");

const templatePath = path.join(__dirname, "../templates");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({extended:false}))




app.get("/", (req, res) => {
  res.render("login");
});


app.get("/signup", (req, res) => {
  res.render("/signup");
});



app.post("/signup", async(req, res) => {
  const data = {
    name:req.body.name,
    password:req.body.password
  }
  // data to database
  await collection.insertMany([data]);
  res.render("home")
});



app.listen(port, (req, res) => {
  console.log(`server is running on  Port ${port}`);
});
