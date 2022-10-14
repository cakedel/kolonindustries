const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
  res.header("Access-Control-Allow-origin", "*");
});
