var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home Page'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About', 
    userName: 'Aaron' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects',
    userName: 'Aaron' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact',
    userName: 'Aaron' });
});

module.exports = router;
