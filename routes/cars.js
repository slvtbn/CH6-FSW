var express = require('express');
var router = express.Router();
const cars = require("../controller/carController");
const auth = require("../middleware/auth");
const dadmin = require("../middleware/doubleAdmin");

router.get("/allcars", auth, cars.getCarsAvail);
router.post("/create", dadmin, cars.createCar);
router.put("/delete/:id", dadmin, cars.deleteCar);
router.put("/update/:id", dadmin, cars.updateCar);

module.exports = router;