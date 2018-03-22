var express = require("express");
var router = express.Router();
var dummyData = require("../mock.data");

/* GET cars listing. */
router.get("/", function(req, res, next) {
  res.json(dummyData.inventory);
});

module.exports = router;
