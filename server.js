const express = require("express");
const bodyParser = require("body-parser");
//const favicon = require("serve-favicon");
//const path = require("path");
const app = express();
const port = 5005;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(favicon(path.join(__dirname, "client", "public", "favicon.ico")));
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${
      req.body.message
    }`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));