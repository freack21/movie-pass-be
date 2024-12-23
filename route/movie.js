const express = require("express");
const tixScraper = require("../controller/tix-scraper");
const omdbAPI = require("../controller/omdb-api");
const router = express.Router();

router.route("/").get(tixScraper.getMovies);
router.route("/search").get(omdbAPI.searchMovies);
router.route("/search/:id").get(omdbAPI.getDetailMovie);
router.route("/:id").get(tixScraper.getDetailMovie);

module.exports = router;
