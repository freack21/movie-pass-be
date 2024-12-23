const express = require("express");
const router = express.Router();
const tokenizer = require("../util/tokenizer");
const userController = require("../controller/user");

const multer = require("multer");
const storage = multer.memoryStorage(); // File akan disimpan di memory sementara
const upload = multer({ storage });

router.post("/register", userController.register);
router.post("/login", userController.login);
router
  .route("/profile")
  .get(tokenizer.authenticateToken, userController.getProfile)
  .put(
    upload.single("avatar"),
    tokenizer.authenticateToken,
    userController.updateProfile
  );

router.post("/logout", tokenizer.authenticateToken, userController.logout);

router.post("/token", tokenizer.refreshAccessToken);

module.exports = router;
