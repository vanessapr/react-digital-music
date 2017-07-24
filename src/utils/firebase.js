import firebase from 'firebase';
import config from '../config';

const firebaseApp = firebase.initializeApp({
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL
});

export const firebaseSignIn = ({ email, password }) =>
  firebaseApp.auth().signInWithEmailAndPassword(email, password);

export const firebaseSignOut = () => firebaseApp.auth().signOut();
export const getUserCurrent = () => firebaseApp.auth().currentUser;
export const firebaseAuth = firebase.auth;
export const ref = firebase.database().ref();

export default firebaseApp;

// export const database = firebaseApp.database();
// export const firebaseAuth = firebaseApp.auth;
// firebase.database().ref('users/' + uid).set({
//         name: name,
//         email: email,
//         photo: photo,
//         uid: uid
//     });
