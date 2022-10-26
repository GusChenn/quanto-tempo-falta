const express = require("express");
const path = require("path");
const http = require("http");

const SPApath = "express/";
const port = 8090;

const app = express();
app.use(express.json());
app.use(express.static("express"));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname + SPApath));
});

const server = http.createServer(app);
server.listen(port);
