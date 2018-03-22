var express = require("express");
var router = express.Router();

/* GET cars listing. */
router.get("/cars", function(req, res, next) {
  res.json([
    {
      id: 1,
      name: "Adam"
    },
    {
      id: 2,
      name: "Sylvia"
    },
    {
      id: 3,
      name: "Cassia"
    },
    {
      id: 4,
      name: "Roxy"
    }
  ]);
});

module.exports = router;
