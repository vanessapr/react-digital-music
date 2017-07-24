import uuidv1 from 'uuid/v1';
import { firebaseAuth, ref } from './firebase';

export default {
  addFavorite: (data) => {
    let currentUser = firebaseAuth().currentUser;
    let uuid = uuidv1();

    return new Promise((resolve, reject) => {
      ref.child(`users/${currentUser.uid}/artists`)
        .once('value')
        .then(snap => {
          if (Object.keys(snap.val()).length < 5 ) {
            ref.child(`users/${currentUser.uid}/artists/${uuid}`)
              .set(data)
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
  }
}
