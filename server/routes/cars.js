var express = require("express");
var router = express.Router();
var cars = require("../mock.data");

// remove availbility key from each car object
// so that it can be added using the availbility service API call
// this is so I can use one dummy data object
function removeAvailabilityKey(car) {
  const { id, img, make, model, year } = car;
  return {
    id,
    img,
    make,
    model,
    year
  };
}

const newCarsArray = cars.map(car => removeAvailabilityKey(car));

/* GET cars listing. */
router.get("/", function(req, res, next) {
  res.json(newCarsArray);
});

module.exports = router;
