const express = require('express');
const fb = require('../firebase/firebase');

const router = express.Router();

router.post('/', (req, res) => {
  fb.getUser(req.body).then((userDoc) => {
    if (userDoc.exists) {
      // send message that user with that email already exists
    } else {
      fb.signUp(req.body).then((userToken) => {
        fb.addNewUser({
          createdAt: new Date().toISOString(),
          ...req.body,
        }).then(() => {
          res.status(201).json({ added: 'User added to db' });
        });
      });
    }
  });
});

module.exports = router;
