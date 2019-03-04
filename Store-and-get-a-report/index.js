const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const routes1 = require('./routes/reportApi');


const app = express();
mongoose.connect('mongodb://localhost/harrypotternames');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api', routes);
app.use('/api', routes1);

const port = 3002;
app.get('/', (req, res) => res.send({ name: 'Darren' }));
app.listen(port, () => console.log('app listening on port ${port}'));
