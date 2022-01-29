var express = require('express');
var router = express.Router();
const getAllPlanets = require('../utils/planetas')

/* GET home page. */
router.get('/', (req, res, next) => {
  getAllPlanets((planetas) => {
    res.render('index', {
      title: 'Solar System',
      planetas
    })
  })
});


module.exports = router;
