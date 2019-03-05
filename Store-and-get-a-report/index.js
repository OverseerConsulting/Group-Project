const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const routes1 = require('./routes/reportApi');
const flaggedReportRouter = require('./routes/flaggedWordsReportApi');
const flaggedWordsRouter = require('./routes/flaggedWordsApi');

const app = express();
// change as required
// mongoose.connect('mongodb://localhost/harrypotternames');

mongoose.connect('mongodb://overseerconsulting:FF5RkQR9cHA6BrTNZA5CAjQdb2nPiSjMh80uI0hndUa7smjhaMyWcUYuCcjNPf8kTjnp0ayVPnBViiov5moKtQ==@overseerconsulting.documents.azure.com:10255/harrypotternames?ssl=true',{useNewUrlParser: true});

mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api', routes);
app.use('/api', routes1);
app.use('/api', flaggedReportRouter);
app.use('/api', flaggedWordsRouter);

const port = 3002;
app.get('/', (req, res) => res.send({ name: 'Darren' }));
app.listen(port, () => console.log('app listening on port 3002'));
