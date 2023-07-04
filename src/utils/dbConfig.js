// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD36HBqycqthQBBdtJ5slTWj_jm8ytyvck",
  authDomain: "pleet-d8210.firebaseapp.com",
  projectId: "pleet-d8210",
  storageBucket: "pleet-d8210.appspot.com",
  messagingSenderId: "752205409866",
  appId: "1:752205409866:web:bbd0fccd1c79b7a2b500b3",
  // measurementId: "G-T9113J49KY"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
