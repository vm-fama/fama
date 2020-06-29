const express = require('express');
const fb = require('../firebase/firebase');

const router = express.Router();

router.post('/', (req, res) => {
  /*
    Req.body for a sign-up will look like this -
    {
	    "firstName": "Myles",
	    "lastName": "Colligan",
	    "email":"myles@fama.com",
	    "password1": "1234567",
	    "password2": "1234567"
    }
  */
  fb.getUser(req.body).then((userDoc) => {
    if (userDoc.exists) {
      res.status(403).send({ error: 'User with that email already exists' });
    } else {
      fb.signUp(req.body).then((userToken) => {
        fb.addNewUser({
          createdAt: new Date().toISOString(),
          ...req.body,
        }).then(() => {
          res.sendStatus(201);
        });
      });
    }
  });
});

module.exports = router;
