const express = require('express'),
  admin = require('firebase-admin'),
  serviceAccount = require('./firebase-adminsdk.json'),
  router = express.Router();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://app-react-music.firebaseio.com'
});

const database = admin.database();

router.post('/', (req, res) => {
  const data = req.body;

  admin.auth().createUser({
    email: data.email,
    displayName: data.fullName,
    password: data.password
  }).then( user => {
    database.ref(`/users/${user.uid}`).set({
      role: data.role,
      email: data.email,
      fullName: data.fullName,
      birthdate: data.birthdate,
      doc: data.doc
    }).then(result => {
      res.json({ data: user, message: 'Successfully added user' });
    });
  }).catch(err => {
    res.status(400).json(err);
  });

});

router.put('/:uid', (req, res) => {
  const uid = req.params.uid;
  const data = req.body;

  Promise.all([
    admin.auth().updateUser(uid,
      Object.assign({
        email: data.email,
        displayName: data.fullName
      }, data.password? { password: data.password } : {})
    ),
    database.ref(`/users/${uid}`).set({
      fullName: data.fullName,
      email: data.email,
      birthdate: data.birthdate,
      doc: data.doc,
      role: data.role
    })
  ]).then(results => {
    res.json({ data: results[0], message: 'Successfully updated user' });
  }).catch(err => {
    res.status(400).json(err);
  });
});

router.delete('/:uid', (req, res) => {
  const uid = req.params.uid;
  Promise.all([
    admin.auth().deleteUser(uid),
    database.ref(`/users/${uid}`).remove()
  ])
  .then(() => {
    res.json({ message: 'Successfully deleted user' });
  })
  .catch(err => {
    res.status(400).json(err);
  });
});


module.exports = router;
