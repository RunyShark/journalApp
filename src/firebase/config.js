// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo3gqLWxPJHWvkUb0mU01qpA-xDii1Yc0",
  authDomain: "react-curso-331ef.firebaseapp.com",
  projectId: "react-curso-331ef",
  storageBucket: "react-curso-331ef.appspot.com",
  messagingSenderId: "82526192041",
  appId: "1:82526192041:web:edad916a52301278b404b8",
  measurementId: "G-W9VK8Q6P34",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
