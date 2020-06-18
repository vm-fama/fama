const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fb = require('./firebase/firebase');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/signup', require('./routes/fbUserRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// app.post('/signup', (req, res) => {
//   fb.getUser(req.body).then((userDoc) => {
//     if (userDoc.exists) {
//       // send message that user with that email already exists
//     } else {
//       fb.signUp(req.body).then((userToken) => {
//         fb.addNewUser({
//           createdAt: new Date().toISOString(),
//           ...req.body,
//         }).then(() => {
//           res.status(201).json({ added: 'User added to db' });
//         });
//       });
//     }
//   });
// });

app.listen(port, (err) => {
  if (err) throw err;
  console.log('Server running on port ' + port);
});
