const express = require('express');
const multer = require('multer');
const upload = multer({
	dest: 'uploads/'
});

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/src/App.js');
});

app.post('/', upload.single('file-to-upload'), (req, res) => {
  res.redirect('/');
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});