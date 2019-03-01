const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api-methods');
const cors = require("cors");
const app = express();


mongoose.connect('mongodb://localhost/user-details', { useNewUrlParser: true });
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

app.use(cors());

app.use('/api', routes);

const port = 4000;
app.listen(port, () => console.log('app listening on port ${port}'));


