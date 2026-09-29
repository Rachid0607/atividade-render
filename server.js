const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = __dirname;

app.use(express.static(publicDirectory));

app.get("/", (request, response) => {
  response.sendFile(path.join(publicDirectory, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
