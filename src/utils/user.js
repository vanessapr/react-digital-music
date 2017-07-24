import { firebaseAuth, ref } from './firebase';

export default {
  create: (email, password) => {
    return firebaseAuth()
      .createUserWithEmailAndPassword(email, password).then(user => {
        return user;
      });
  }
}
