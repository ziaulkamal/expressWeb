const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('adminLayouts', {
    'title' : 'example page',
    // 'page': 'home'
  })
  
});


module.exports = router;