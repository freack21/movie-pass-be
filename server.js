const http = require("http");
const https = require("https");
const fs = require("fs");

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, ".env.server"),
});
const express = require("express");
const routeHandler = require("./route");
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

app.use(routeHandler);

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
