const autoSSL = (req, res, next) => {
  if (rec.secure) {
    next();
  } else {
    res.redirect(process.env.BASE_URL + req.url);
  }
};

module.exports = autoSSL;
