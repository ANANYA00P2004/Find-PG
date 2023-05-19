// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-O-Qn87_Cn8rdZm-RBQWbn9Ylf5ZExjE",
  authDomain: "find-pg-dc1b8.firebaseapp.com",
  projectId: "find-pg-dc1b8",
  storageBucket: "find-pg-dc1b8.appspot.com",
  messagingSenderId: "543447578540",
  appId: "1:543447578540:web:84546bcaf1a56f0483ac09",
  measurementId: "G-V39R6MZYZD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);