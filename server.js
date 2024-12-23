const http = require("http");
const https = require("https");
const fs = require("fs");

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
const express = require("express");
const authRoute = require("./route/auth");
const movieRoute = require("./route/movie");
const notFoundHandler = require("./util/not-found");
const autoSSL = require("./util/auto-ssl");

const app = express();

app.use(autoSSL);
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
const options = {
  key: fs.readFileSync(`/etc/letsencrypt/live/${process.env.URL}/privkey.pem`),
  cert: fs.readFileSync(`/etc/letsencrypt/live/${process.env.URL}/cert.pem`),
  ca: fs.readFileSync(`/etc/letsencrypt/live/${process.env.URL}/chain.pem`),
};

https.createServer(options, app).listen(PORT, () => {
  console.log("Server running on " + process.env.BASE_URL);
});

const PORT_HTTP = Number(PORT) + 1;
http.createServer(app).listen(PORT_HTTP, () => {
  console.log(`HTTP server running (auto redirect to HTTPS)`);
});
