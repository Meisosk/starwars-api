const express = require("express");
const app = express();
const port = 3000;
const data = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/characters", (req, res) => {
  res.send(data);
});

app.get("/characters/:id", (req, res) => {
  const { id } = req.params;
  res.send(data["charater-data"][id]);
});

// app.post("/characters/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(data["charater-data"][id]);
// });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
