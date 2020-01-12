import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// import database from "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyADZ_f7pPIcPivd9FocaSHTU4PDuphdl6k",
  authDomain: "budget-calculator-22407.firebaseapp.com",
  databaseURL: "https://budget-calculator-22407.firebaseio.com",
  projectId: "budget-calculator-22407",
  storageBucket: "budget-calculator-22407.appspot.com",
  messagingSenderId: "697084907469",
  appId: "1:697084907469:web:c2e0da97d52ce95e923e84",
  measurementId: "G-7YN5GFCRXN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;
