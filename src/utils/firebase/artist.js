import { firebaseAuth, ref } from './index';

export default {
  addFavorite: (data) => {
    let currentUser = firebaseAuth().currentUser;

    return new Promise((resolve, reject) => {
      ref.child(`artists/${currentUser.uid}`)
        .once('value')
        .then(snap => snap.val())
        .then(value => {
          value = value || {};
          if (Object.keys(value).length < 5 ) {
            ref.child(`artists/${currentUser.uid}/${data.uuid}`)
              .set({selected: true, ...data})
              .then(resolve)
              .catch(reject);
          } else {
            reject(new Error('The limit is 5 artists'));
          }
        });
    });
  },
  getFavorites: () => {
    let currentUser = firebaseAuth().currentUser;
    return ref.child(`artists/${currentUser.uid}`).once('value').then(snap => snap.val() || {});
  },
  removeFavorite: (uuid) => {
    let currentUser = firebaseAuth().currentUser;
    return ref.child(`artists/${currentUser.uid}/${uuid}`).remove();
  }
}
