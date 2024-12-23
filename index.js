const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
const express = require("express");
const authRoute = require("./route/auth");
const movieRoute = require("./route/movie");
const notFoundHandler = require("./util/not-found");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.all("/", (req, res) => {
  return res.json({ message: "Welcome to MoviePass API", success: true });
});

app.use("/auth", authRoute);
app.use("/movie", movieRoute);

app.use(notFoundHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
