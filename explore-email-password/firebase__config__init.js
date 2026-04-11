// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxLKIt5tatatxufp9GJQodY0E674hE4IQ",
  authDomain: "explore-email-pass-auth-7ca63.firebaseapp.com",
  projectId: "explore-email-pass-auth-7ca63",
  storageBucket: "explore-email-pass-auth-7ca63.firebasestorage.app",
  messagingSenderId: "478634865575",
  appId: "1:478634865575:web:d44b6f3d66ac83fed97c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);