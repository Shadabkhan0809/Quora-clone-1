import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB5ZJiKywgMtObAQ3y8I0T8ikAdcBQbpnY",
  authDomain: "quora-clone-be286.firebaseapp.com",
  projectId: "quora-clone-be286",
  storageBucket: "quora-clone-be286.appspot.com",
  messagingSenderId: "187719971221",
  appId: "1:187719971221:web:bfe42792739476aa4c869c",
  measurementId: "G-WHXJGS6XGB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;