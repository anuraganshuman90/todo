

  import firebase from "firebase";
  const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyCG5X4tdJ_ZwzvGCh9kqNP2hifYFZz-QWs",
    authDomain: "todoapp-56b0e.firebaseapp.com",
    databaseURL: "https://todoapp-56b0e.firebaseio.com",
    projectId: "todoapp-56b0e",
    storageBucket: "todoapp-56b0e.appspot.com",
    messagingSenderId: "639334701601",
    appId: "1:639334701601:web:4ded3a8d136c4804df6160",
    measurementId: "G-NWJWFP3Q88"
  });

const db=firebaseApp.firestore();

export default db;