// Do Not SHARE THIS CODE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGe-HHcGA3R9dstn7rYqUYMmxroeWTt2Q",
  authDomain: "simple-firebase-auth-95ea6.firebaseapp.com",
  projectId: "simple-firebase-auth-95ea6",
  storageBucket: "simple-firebase-auth-95ea6.firebasestorage.app",
  messagingSenderId: "321665807958",
  appId: "1:321665807958:web:b92ecb72cf3e2378f2adf7"
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)