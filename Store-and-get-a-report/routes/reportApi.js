const express = require('express');

const router1 = express.Router();
const FlaggedWordsReport = require('../models/harrypotterReport');

router1.get('/potterreport', function(req, res){
    FlaggedWordsReport.find({}).then(function(reports){
        res.send(reports);
    })
});

// change :name to field that you are trying to find
router1.get('/potterreport/:name', function(req, res){
    FlaggedWordsReport.find({name: req.params.name}).then(function(reports){
        res.send(reports);
    })
});


router1.post('/potterreport', function (req, res){
    FlaggedWordsReport.create(req.body).then(function(reports){
        res.send(reports);
    })
});
module.exports = router1;
