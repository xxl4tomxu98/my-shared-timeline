const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello to the Express APIs demo app!" });
});

module.exports = router;
