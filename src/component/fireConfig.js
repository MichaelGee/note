import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBARD7Gi1hdK_dL-BGbXP660WJQUS-p8l8",
  authDomain: "note-2bb27.firebaseapp.com",
  databaseURL: "https://note-2bb27.firebaseio.com",
  projectId: "note-2bb27",
  storageBucket: "note-2bb27.appspot.com",
  messagingSenderId: "866934518085",
  appId: "1:866934518085:web:821eaa2645f9f1d2"
};

// Initialize firebase
const fireAuth = firebase.initializeApp(firebaseConfig);

export default fireAuth;
