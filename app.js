const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/add", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sum = num1 + num2;
  res.send(`Sum: ${sum}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
