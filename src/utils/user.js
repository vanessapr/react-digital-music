import firebaseApp, { firebaseAuth, ref } from './firebase';

export default {
  login: ({ email, password }) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  },
  logout: () => {
    return firebaseApp.auth().signOut();
  },
  create: (email, password) => {
    return firebaseAuth()
      .createUserWithEmailAndPassword(email, password).then(user => {
        return user;
      });
  },
  updateProfile: (data) => {
    let currentUser = firebaseApp.auth().currentUser;
    const { fullName, email, password, birthdate, doc, passwordOld } = data;

    return new Promise((resolve, reject) => {
      let credentials = firebaseAuth.EmailAuthProvider.credential(currentUser.email, passwordOld);
      currentUser.reauthenticateWithCredential(credentials).then((response) => {
        Promise.all([
          currentUser.updateProfile({
          displayName: fullName
          }),
          currentUser.updateEmail(email),
          ref.child(`users/${currentUser.uid}`)
            .set({
              role: 'public',
              birthdate: birthdate,
              doc: doc
            })
        ]).then(() => {
          if (password !== '') {
            currentUser.updatePassword(password)
              .then(resolve)
              .catch(reject);
          } else {
            resolve();
          }
        });
      }).catch(reject);
    });
  },
  getProfile: () => {
    return new Promise((resolve, reject) => {
      let currentUser = firebaseApp.auth().currentUser;
      ref.child(`users/${currentUser.uid}`).once('value')
        .then(snap => {
          resolve( Object.assign(currentUser, snap.val()) );
        }).catch(err => {
          reject(err);
        });
    });

  }
}
