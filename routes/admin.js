var express = require('express');
var router = express.Router();

const {index, products} = require('../controllers/adminController');

//admin
router.get('/',index);
router.get('/productos',products);


module.exports = router