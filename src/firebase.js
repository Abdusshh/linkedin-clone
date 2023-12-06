import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1DbBQXx5vg7bxpI52c4sqFjph8R0GWa8",
  authDomain: "linkedin-clone-7a920.firebaseapp.com",
  projectId: "linkedin-clone-7a920",
  storageBucket: "linkedin-clone-7a920.appspot.com",
  messagingSenderId: "347894073374",
  appId: "1:347894073374:web:03a0671ac3ed1de93c860f",
  measurementId: "G-HH3GF7WY25",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };