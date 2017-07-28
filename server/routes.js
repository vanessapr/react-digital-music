const express = require('express'),
  admin = require('firebase-admin'),
  serviceAccount = require('./firebase-adminsdk.json'),
  router = express.Router();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://app-react-music.firebaseio.com'
});

const database = admin.database();

router.post('/users', (req, res) => {
  const data = req.body;

  admin.auth().createUser({
    email: data.email,
    displayName: data.fullName,
    password: data.password
  }).then( user => {
    database.ref(`/users/${user.uid}`).set({
      role: 'user',
      email: data.email,
      fullName: data.fullName
    }).then(result => {
      res.json(user);
    });
  }).catch(err => {
    res.status(400).json(err);
  });

});

router.put('/users/:uid', (req, res) => {
  const uid = req.params.uid;
  const data = req.body;

  Promise.all([
    admin.auth().updateUser(uid, {
      email: data.email,
      displayName: data.fullName
    }),
    database.ref(`/users/${uid}`).set({
      fullName: data.fullName,
      email: data.email,
      birthdate: data.birthdate,
      doc: data.doc,
      role: 'user'
    })
  ]).then(results => {
    res.json(results);
  }).catch(err => {
    res.status(400).json(err);
  });

});

module.exports = router;
