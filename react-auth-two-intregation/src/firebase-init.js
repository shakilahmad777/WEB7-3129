// DON'T SHARE THIS IS TOO MUCH DANGER !!!!!! //

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNIaNH0oZnHzg8ml7TNU3AYLubHT6qr9Q",
  authDomain: "react-auth-two-intregation.firebaseapp.com",
  projectId: "react-auth-two-intregation",
  storageBucket: "react-auth-two-intregation.firebasestorage.app",
  messagingSenderId: "883401765246",
  appId: "1:883401765246:web:e7fce29cc718035a9cc32f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)