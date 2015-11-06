var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response, next) {
  // Get users
  var users = [
    {name:'edouard'},
    {name: 'ferdi'}
  ];
  // Send response
  response.send(users);
});

module.exports = router;
