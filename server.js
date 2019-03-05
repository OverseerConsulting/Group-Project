const express = require('express');
const multer = require('multer');
let path = require('path');
let crypto = require('crypto');

const app = express();
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

// console.log that server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

// GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});