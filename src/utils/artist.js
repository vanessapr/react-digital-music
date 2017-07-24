import { firebaseAuth, ref } from './firebase';

export default {
  addFavorite: (data) => {
    let currentUser = firebaseAuth().currentUser;

    return new Promise((resolve, reject) => {
      ref.child(`users/${currentUser.uid}/artists`)
        .once('value')
        .then(snap => {
          if (snap.val() == null || Object.keys(snap.val()).length < 5 ) {
            ref.child(`users/${currentUser.uid}/artists/${data.uuid}`)
              .set({selected: true, ...data})
              .then(resolve)
              .catch(err => reject(err));
          } else {
            reject(new Error('The limit is 5 artists'));
          }
        });
    });
  },
  getFavorites: () => {
    let currentUser = firebaseAuth().currentUser;
    return ref.child(`users/${currentUser.uid}/artists`).once('value').then(snap => snap.val());
  },
  removeFavorite: (uuid) => {
    let currentUser = firebaseAuth().currentUser;
    return ref.child(`users/${currentUser.uid}/artists/${uuid}`).remove();
  }
}
