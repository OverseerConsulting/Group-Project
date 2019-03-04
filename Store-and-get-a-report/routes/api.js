const express = require('express');

const router = express.Router();
const Potter = require('../models/harrypotternames');

//get list of names from data base
router.get('/potter', function(req, res) {
    Potter.find({}).then(function(potterNames){
        res.send(potterNames);
    });
}); 

router.post('/potter', function (req, res) {
     Potter.create(req.body).then(function(potter){
         res.send(potter);
     });
});
module.exports = router;
