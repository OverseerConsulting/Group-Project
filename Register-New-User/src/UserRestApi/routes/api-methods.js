const express = require('express');

const router = express.Router();
const User = require('../models/user-details');

//get list of names from data base
router.get('/users', function(req, res) {
    User.find({}).then(function(userDetails){
        res.send(userDetails);
    });
}); 

router.post('/users', function (req, res) {
     User.create(req.body).then(function(userDetails){
         res.send(userDetails);
     });
});
module.exports = router;
