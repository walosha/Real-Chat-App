const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (process.env.NODE_ENV == "production") {
    return res.sendFile(path.resolve("./client/build"));
  }
  res.sendFile(path.resolve("./client/public/index.html"));
});

module.exports = router;
