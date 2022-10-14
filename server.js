const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
if (process.env.NODE_ENV === "production") {

  app.use(express.static("./build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../kolonindustries", "./build", "index.html"));
  });
}

app.get("*", function (req, res) {
  res.header("Access-Control-Allow-origin", "*");
  res.sendFile(path.join(__dirname, "./build/index.html"));
});
