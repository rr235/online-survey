const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const questions = require("./questions.json");

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(bodyParser.json());

app.get("/api/questions", (req, res) => {
  res.send(questions);
});

server.listen(port, () => console.log(`listening at ${port}`));
