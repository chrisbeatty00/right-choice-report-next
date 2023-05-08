const path = require("path");
const express = require("express");
const savePDF = require("./puppeteer");

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "../out")));

const server = app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  console.log("saving pdf");
  await savePDF();
  console.log("done saving pdf");
  server.close();
});
