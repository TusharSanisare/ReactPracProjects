// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsGjtfTL3iB6H_1huBdnvYq6ac42s72q0",
  authDomain: "reactproject5-54f9c.firebaseapp.com",
  projectId: "reactproject5-54f9c",
  storageBucket: "reactproject5-54f9c.appspot.com",
  messagingSenderId: "307351073131",
  appId: "1:307351073131:web:5aadc86e591b2eeeb85c2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
// LDA5R4kGXoCMqnwBC4n0