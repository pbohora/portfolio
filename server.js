const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const port = process.env.PORT || 5005;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(favicon(path.join(__dirname, "client", "public", "build/favicon.ico")));
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
if (process.env.NODDE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
