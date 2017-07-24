import { firebaseAuth, ref } from './firebase';

export default {
  create: (email, password) => {
    return firebaseAuth()
      .createUserWithEmailAndPassword(email, password).then(user => {
        return user;
      });
  },
  updateProfile: (data) => {
    let currentUser = firebaseAuth().currentUser;
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
      let currentUser = firebaseAuth().currentUser;
      ref.child(`users/${currentUser.uid}`).once('value')
        .then(snap => {
          resolve( Object.assign(currentUser, snap.val()) );
        }).catch(err => {
          reject(err);
        });
    });

  }
}
