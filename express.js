const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flaggedReportRouter = require('./routes/flaggedWordsReportApi');
const flaggedWordsRouter = require('./routes/flaggedWordsApi');
const multer = require('multer');
let path = require('path');
let crypto = require('crypto');
let cors = require('cors');

const app = express();

app.use(cors());

let storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)
            var ext = path.extname(file.originalname);
            if (ext !== '.csv' && ext !== '.pdf' && ext !== '.txt') {
                return cb(new Error('Only CSV, PDF and TXT files are allowed'))
            }
            cb(null, raw.toString('hex') + path.extname(file.originalname))
        })
    }
})

let upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'C:/Users/Admin/groupproject/src/Main.js');
});

app.post('/', upload.array('file-to-upload', 3), (req, res) => {
    res.redirect('/');
});

mongoose.connect('mongodb://overseerconsulting:FF5RkQR9cHA6BrTNZA5CAjQdb2nPiSjMh80uI0hndUa7smjhaMyWcUYuCcjNPf8kTjnp0ayVPnBViiov5moKtQ==@overseerconsulting.documents.azure.com:10255/harrypotternames?ssl=true', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', flaggedReportRouter);
app.use('/api', flaggedWordsRouter);

const port = 5000;
app.listen(port, () => console.log('app listening on port 5000'));