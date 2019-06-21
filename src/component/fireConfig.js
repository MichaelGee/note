import app from "firebase/app";
import "firebase/auth";
//import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBARD7Gi1hdK_dL-BGbXP660WJQUS-p8l8",
  authDomain: "note-2bb27.firebaseapp.com",
  databaseURL: "https://note-2bb27.firebaseio.com",
  projectId: "note-2bb27",
  storageBucket: "note-2bb27.appspot.com",
  messagingSenderId: "866934518085",
  appId: "1:866934518085:web:821eaa2645f9f1d2"
};

class Firebasee {
  constructor() {
    // Initialize firebase
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    //this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async signup(username, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: username
    });
  }

  logout() {
    return this.auth.signOut();
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUser() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebasee();
