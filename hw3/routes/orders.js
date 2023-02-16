//Trystan Wong
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    //array of order objects with new elements for the HTML 
    const orders = [
        { topping: 'cherry', quantity: 2 },
        { topping: 'plain', quantity: 2 },
        { topping: 'chocolate', quantity: 2 }
    ];
    res.send(orders);
});

module.exports = router;
