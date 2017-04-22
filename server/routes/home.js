const express = require('express');
const router = express.Router();
const path = require('path')

/* Redirecting homepage to drinks page */
 
router.get('/', function(req, res, next) {
  res.redirect('http://localhost:8080/drinks');
});

module.exports = router;