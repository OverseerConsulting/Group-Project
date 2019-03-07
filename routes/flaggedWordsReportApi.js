const express = require('express');

const flaggedReportRouter = express.Router();
const FlaggedReport = require('../models/report');

flaggedReportRouter.get('/report', function(req, res) {
    FlaggedReport.find({}).then(function(flaggedWords){
        res.send(flaggedWords);
    });
}); 

flaggedReportRouter.get('/report/:document', function(req, res){
    FlaggedReport.find({document : req.params.document}).then(function(flaggedWords){
        res.send(flaggedWords);
    })
});

flaggedReportRouter.post('/report', function (req, res) {
     FlaggedReport.create(req.body).then(function(flaggedWords){
         res.send(flaggedWords);
     });
});
module.exports = flaggedReportRouter;