const express = require("express");
const app = express();
const port = process.env.port || 3000;

const server = app.listen(port, () => {
  var host = server.address().address;
  var port1 = server.address().port;

  console.log("alexa-nodejs started at http://%s:%s", host, port1);
});

app.get("/", (req, res) => {
  res.end(JSON.stringify('{"message":"My first node app"}'));
});
