// const express = require("express");
// const serverless = require("serverless-http");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/characters", (req, res) => {
//   res.send(data);
// });

// app.get("/characters/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(data["charater-data"][id]);
// });

// // app.post("/characters/:id", (req, res) => {
// //   const { id } = req.params;
// //   res.send(data["charater-data"][id]);
// // });

// app.use("/.netlify/functions/api");
// module.exports.handler = serverless(app);
// // app.listen(port, () => {
// //   console.log(`Example app listening on http://localhost:${port}`);
// // });

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const data = require("../data.json");

let records = [];

//Get all students
router.get("/", (req, res) => {
  res.send("App is running..");
});

//Create new record
router.post("/add", (req, res) => {
  res.send("New record added.");
});

//delete existing record
router.delete("/", (req, res) => {
  res.send("Deleted existing record");
});

//updating existing record
router.put("/", (req, res) => {
  res.send("Updating existing record");
});

//showing demo records
router.get("/character", (req, res) => {
  res.send(data["charater-data"]);
});

router.get("/character/:id", (req, res) => {
  const { id } = req.params;
  res.send(data["charater-data"][id]);
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
