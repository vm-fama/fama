const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fb = require('./firebase/firebase');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/signup', (req, res) => {
  fb.getUsers(req.body).then((userDoc) => {
    console.log(userDoc.exists);
  });
  // fb.signUp(req.body).then((result) => {
  //   console.log(result);
  // });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log('Server running on port ' + port);
});
