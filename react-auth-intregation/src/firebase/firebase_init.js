// this is danger zone please do not share!!!!!!!!!!!!!!!!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCJcUCO_hqzTkuGrKi0f2j1ZMeMF7FUfs",
  authDomain: "react-auth-intregation-529db.firebaseapp.com",
  projectId: "react-auth-intregation-529db",
  storageBucket: "react-auth-intregation-529db.firebasestorage.app",
  messagingSenderId: "849370447160",
  appId: "1:849370447160:web:2473f1267f09b983e415cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)