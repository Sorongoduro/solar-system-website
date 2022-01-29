var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('admin', {
    title: 'Solar System - Admin'
  })
});


module.exports = router;
