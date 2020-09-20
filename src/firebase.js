import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3Jk2cHF-GlMpSjmzDEejerSrvKSR5ruc",
  authDomain: "clone-440e2.firebaseapp.com",
  databaseURL: "https://clone-440e2.firebaseio.com",
  projectId: "clone-440e2",
  storageBucket: "clone-440e2.appspot.com",
  messagingSenderId: "752869808882",
  appId: "1:752869808882:web:3c53647d1a0d5484b28e6b",
  measurementId: "G-ZDXNJNXS30",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const db = firebaseApp.firestore();

export { auth, db };
