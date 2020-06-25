var express = require('express');
var router = express.Router();

const adminController = require('../controllers/index');
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('addproduct', { title: 'Express' });
});
router.get('/Projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});

router.get('/AboutUs', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/ContactUs', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/add',adminController.postAddProduct);

router.get('/:category',adminController.getProducts);

router.get('/productDetails/:prodId',adminController.getSingleProduct)

module.exports = router;
