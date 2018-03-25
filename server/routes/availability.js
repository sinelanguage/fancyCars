var express = require("express");
var router = express.Router();
var cars = require("../mock.data");

// does the car id match id from the query params
function isCar(carId, id) {
  return carId === id;
}

// find matching car in array of cars objects
function findCarById(id) {
  return cars.find(car => isCar(car.id, id));
}

// "availbility" is key on mock data object which is all we want from this API call
router.get("/:id", function(req, res, next) {
  const { availability } = findCarById(req.params.id);
  return res.json({ availability });
});

module.exports = router;
