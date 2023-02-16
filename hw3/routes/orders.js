//Trystan Wong
const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  //Array of order objects to be used for HTML side
  const orders = [
    { topping: 'Cherry', quantity: 20 },
    { topping: 'Plain', quantity: 10 },
    { topping: 'Chocolate', quantity: 100 }
];
res.send(orders);
});
module.exports = router;
