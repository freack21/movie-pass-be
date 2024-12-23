const autoSSL = (req, res, next) => {
  res.redirect("https://" + req.headers.host + req.path);
};

module.exports = autoSSL;
