const { query } = require("express");
const express = require("express");

const app = express();

const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Yay Node!");
//   console.log(req);
// });

app.get("/glide", (req, res) => {
  res.send("Gliding is nice :)");
  console.log(req);
});

app.get("/plaice", (req, res) => {
    res.send("Plaice is nice :)");
});

app.get("/", (req, res) => {
    let search = req.query.search;
    res.send("Hello world, you searched for " + search);
});

app.listen(port, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
