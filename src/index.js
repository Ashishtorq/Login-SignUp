const express = require("express");
const app = express();
const path = require("path");

const port = 4500;
app.listen(port, (req, res) => {
  console.log(`server is running on  Port ${port}`);
});
