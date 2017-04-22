const express = require('express');
const router = express.Router();
const path = require('path');

const drinks = require('../../exercises/1/drinks.json');


/* GET Drinks list. */

router.get('/', function (req, res, next) {
  res.json(drinks);
})

module.exports = router;