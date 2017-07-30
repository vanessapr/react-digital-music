import firebase from 'firebase';
import config from '../../config';

const firebaseApp = firebase.initializeApp({
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
});

export const firebaseAuth = firebase.auth;
export const ref = firebase.database().ref();

export { default as User } from './user';
export { default as Artist } from './artist';

export default firebaseApp;
