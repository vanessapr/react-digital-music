import firebaseApp, { firebaseAuth, ref } from './firebase';

export default {
  login: ({ email, password }) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
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
                role: 'public',
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
              fullName: fullName,
              email: email,
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
  getUser: (uid) => {
    return ref.child(`users/${uid}`).once('value')
      .then(snap => snap.val() );
  },
  getUsers: () => {
    let currentUser = firebaseApp.auth().currentUser;
    return ref.child('users').once('value')
      .then(snap => snap.val())
      .then(data => {
        delete data[currentUser.uid]
        return data;
      });
  }
}
