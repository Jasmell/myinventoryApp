// Import the functions you need from the SDKs you need
//The project
import { initializeApp } from "firebase/app";
//The DB
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvh1Irif-L_ZUf49kxbi42AqAkwzwlTm4",
    authDomain: "expensesapp-4c209.firebaseapp.com",
    databaseURL: "https://expensesapp-4c209-default-rtdb.firebaseio.com/",
    projectId: "expensesapp-4c209",
    storageBucket: "expensesapp-4c209.appspot.com",
    messagingSenderId: "343573887827",
    appId: "1:343573887827:web:bb08262116c5a11b9a7fa6",
    measurementId: "G-4VNTVMY0T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
//This represents our database
export {db, auth, signInWithEmailAndPassword, signInAnonymously} ;
