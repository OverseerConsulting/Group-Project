const express = require('express');

const router = express.Router();
// harrypotternames.js is the schema for the flagged word list of harry potter names
const Potter = require('../models/harrypotternames');

// get list of names from data base
router.get('/potter', function(req, res) {
    Potter.find({}).then(function(potterNames){
        res.send(potterNames);
    });
}); 

router.get('/potter/:name', function(req, res){
    Potter.find({Name : req.params.name}).then(function(reports){
        res.send(reports);
    })
});

router.post('/potter', function (req, res) {
     Potter.create(req.body).then(function(potter){
         res.send(potter);
     });
});
module.exports = router;
