const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api-methods');
const cors = require("cors");


const app = express();
mongoose.connect('mongodb://localhost/user-details');
mongoose.Promise = global.Promise;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use(cors());

app.use('/api', routes);

const port = 4000;
app.listen(port, () => console.log('app listening on port ${port}'));


