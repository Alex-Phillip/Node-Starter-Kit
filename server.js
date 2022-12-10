const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Yay Node!");
  console.log(req);
});

app.get("/glide", (req, res) => {
  res.send("Gliding is nice :)");
  console.log(req);
});

app.listen(port, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
