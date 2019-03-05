const express = require('express');

const router1 = express.Router();
const FlaggedWordsReport = require('../models/harrypotterReport');

router1.get('/report', function(req, res){
    FlaggedWordsReport.find({}).then(function(reports){
        res.send(reports);
    })
});

// change :name to field that you are trying to find
router1.get('/report/:name', function(req, res){
    FlaggedWordsReport.find({name: req.params.name}).then(function(reports){
        res.send(reports);
    })
});


router1.post('/report', function (req, res){
    FlaggedWordsReport.create(req.body).then(function(reports){
        res.send(reports);
    })
});
module.exports = router1;
