import firebase from 'firebase';
import config from '../config';

const firebaseApp = firebase.initializeApp({
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL
});

export const firebaseSignOut = () => firebaseApp.auth().signOut();
export const getUserCurrent = () => firebaseApp.auth().currentUser;
export const firebaseAuth = firebase.auth;
export const ref = firebase.database().ref();

export default firebaseApp;
