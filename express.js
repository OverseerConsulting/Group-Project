const express = require('express');
const multer = require('multer');
const flaggedReportRouter = require('./routes/flaggedWordsReportApi');
const flaggedWordsRouter = require('./routes/flaggedWordsApi');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
let path = require('path');
let crypto = require('crypto');

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'analyst', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

const port = process.env.PORT || 5000;

let storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

let upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/src/App.js');
});

app.post('/', upload.single('file-to-upload'), (req, res) => {
  //res.send(req.file.filename); ---- this displays the random filename back to the front end
  res.redirect('/');
});

if(!isProduction) {
  app.use(errorHandler());
}

mongoose.connect('mongodb://overseerconsulting:FF5RkQR9cHA6BrTNZA5CAjQdb2nPiSjMh80uI0hndUa7smjhaMyWcUYuCcjNPf8kTjnp0ayVPnBViiov5moKtQ==@overseerconsulting.documents.azure.com:10255/harrypotternames?ssl=true',{useNewUrlParser: true});
mongoose.set('debug', true);

require('./models/Users');
require('./config/passport');
app.use('/api', flaggedReportRouter);
app.use('/api', flaggedWordsRouter);
app.use(require('./routes'));

if(!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

// console.log that server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

// GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});