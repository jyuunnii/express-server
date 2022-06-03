var express = require('express');
var router = express.Router();

// Router-level middleware

// app.METHOD(PATH, HANDLER) 
// app is an instance of express
// METHOD is the HTTP method
// PATH is a path on the server
// HANDLER is the function executed when the route is matched (endpoint and HTTP method)

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
