var express = require("express");
var router = express.Router();
var cars = require("../mock.data");

/* GET cars listing. */
router.get("/", function(req, res, next) {
  res.json(cars);
});

module.exports = router;
