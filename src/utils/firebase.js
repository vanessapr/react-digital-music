import firebase from 'firebase';
import config from '../config';

const config = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
