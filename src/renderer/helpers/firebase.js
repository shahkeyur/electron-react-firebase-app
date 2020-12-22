import firebase from "firebase";
import firebaseConfig from "../config/firebase.json";

class FirebaseClient {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  login(email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          resolve(response.user);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }

  signup(email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          resolve(response.user);
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  }
}

const firebaseClient = new FirebaseClient();

export default firebaseClient;
