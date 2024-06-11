const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/port", (req, res) => res.json(`The port is ${PORT}`));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
