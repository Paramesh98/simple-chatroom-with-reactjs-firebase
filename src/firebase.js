import firebase from "firebase";

const Firebase = firebase.initializeApp({
  apiKey: "AIzaSyC_ptkNclz60xU2CfmJW9FTVDRH98I6_wQ",
  authDomain: "facebook-messanger-clone-18912.firebaseapp.com",
  databaseURL: "https://facebook-messanger-clone-18912.firebaseio.com",
  projectId: "facebook-messanger-clone-18912",
  storageBucket: "facebook-messanger-clone-18912.appspot.com",
  messagingSenderId: "965339483380",
  appId: "1:965339483380:web:6d999ae1018731b52262a1",
  measurementId: "G-H4ZM4XB85E",
});
const db = Firebase.firestore();

export default db;
