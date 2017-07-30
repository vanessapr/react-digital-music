import firebaseApp, { firebaseAuth, ref } from './index';

let User = {
  login: function({ email, password }) {
    return new Promise((resolve, reject) => {
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then( user => {
          User.getUser(user.uid)
            .then(resolve)
            .catch(reject);
        }).catch(reject);
    });
  },
  logout: () => {
    return firebaseApp.auth().signOut();
  },
  create: ({email, password, fullName}) => {
    return new Promise((resolve, reject) => {
      firebaseAuth()
        .createUserWithEmailAndPassword(email, password).then(user => {
          Promise.all([
            ref.child(`users/${user.uid}`)
              .set({
                role: 'user',
                fullName: fullName,
                email: email,
              }),
            user.updateProfile({
              displayName: fullName
            })
          ]).then(() => {
            resolve(user);
          }).catch(reject);
        }).catch(reject);
    });
  },
  updateProfile: (data) => {
    let currentUser = firebaseApp.auth().currentUser;
    const { fullName, email, password, birthdate, doc, yourPassword, role } = data;

    return new Promise((resolve, reject) => {
      let credentials = firebaseAuth.EmailAuthProvider.credential(currentUser.email, yourPassword);
      currentUser.reauthenticateWithCredential(credentials).then((response) => {
        Promise.all([
          currentUser.updateProfile({
          displayName: fullName
          }),
          currentUser.updateEmail(email),
          ref.child(`users/${currentUser.uid}`)
            .set({
              role: role,
              fullName: fullName,
              email: email,
              birthdate: birthdate,
              doc: doc
            })
        ]).then(() => {
          if (password !== '') {
            currentUser.updatePassword(password)
              .then(() => {
                resolve({ message: 'Successfully updated profile' });
              })
              .catch(reject);
          } else {
            resolve({ message: 'Successfully updated profle' });
          }
        });
      }).catch(reject);
    });
  },
  getUser: (uid) => {
    return ref.child(`users/${uid}`).once('value')
      .then(snap => snap.val() )
      .then(data => Object.assign(data, { uid: uid } ));
  },
  getUsers: function() {
    let currentUser = firebaseApp.auth().currentUser;
    return ref.child('users').once('value')
      .then(snap => snap.val())
      .then(data => {
        data = data || {};
        delete data[currentUser.uid]
        return data;
      });
  }
};

export default User;
