const express = require('express');

const flaggedWordsRouter = express.Router();
const Flagged = require('../models/flaggedWords');

flaggedWordsRouter.get('/flaggedWords', function(req, res) {
    Flagged.find({}).then(function(flaggedWords){
        res.send(flaggedWords);
    });
}); 

flaggedWordsRouter.get('/flaggedWords/:name', function(req, res){
    Flagged.find({ListName : req.params.name}).then(function(flaggedWords){
        res.send(flaggedWords);
    })
});

flaggedWordsRouter.post('/flaggedWords', function (req, res) {
     Flagged.create(req.body).then(function(flaggedWords){
         res.send(flaggedWords);
     });
});
module.exports = flaggedWordsRouter;
