// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBxDmjFv-x52W7MrhAlc69ELq-asnyUyUk",
  authDomain: "pleet-3555b.firebaseapp.com",
  projectId: "pleet-3555b",
  storageBucket: "pleet-3555b.appspot.com",
  messagingSenderId: "247262048336",
  appId: "1:247262048336:web:0118d03e853d2f15406155",
  measurementId: "G-RJZNQ1EW89"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
