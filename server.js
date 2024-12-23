const http = require("http");
const https = require("https");
const fs = require("fs");

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env"),
});
const express = require("express");
const authRoute = require("./route/auth");
const notFoundHandler = require("./util/not-found");
const autoSSL = require("./util/auto-ssl");

const app = express();
const httpApp = express();

httpApp.use(autoSSL);
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

app.use(notFoundHandler);

const PORT = process.env.PORT || 3000;
const options = {
  key: fs.readFileSync(`/etc/letsencrypt/live/${process.env.URL}/privkey.pem`),
  cert: fs.readFileSync(`/etc/letsencrypt/live/${process.env.URL}/cert.pem`),
  ca: fs.readFileSync(`/etc/letsencrypt/live/${process.env.URL}/chain.pem`),
};

http.createServer(httpApp).listen(Number(PORT) + 1, () => {
  console.log(
    `HTTP server is running on port ${Number(PORT) + 1} (redirecting to HTTPS)`
  );
});

https.createServer(options, app).listen(PORT, () => {
  console.log("Server berjalan di " + process.env.BASE_URL);
});
