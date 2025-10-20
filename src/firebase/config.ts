// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXC1zoE9V-muTFj9XGvAm7WA37lEW8rQk",
  authDomain: "you-tube-14f6b.firebaseapp.com",
  projectId: "you-tube-14f6b",
  storageBucket: "you-tube-14f6b.firebasestorage.app",
  messagingSenderId: "936021667117",
  appId: "1:936021667117:web:aa3cd47563b9659cbb77a4",
  measurementId: "G-T1TED9R8FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);
