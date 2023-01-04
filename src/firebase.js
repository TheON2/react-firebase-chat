// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmpuvbEWIVkJuR9FyQWmQwusga9_TqoY4",
  authDomain: "react-firebase-chat-app-c1466.firebaseapp.com",
  projectId: "react-firebase-chat-app-c1466",
  storageBucket: "react-firebase-chat-app-c1466.appspot.com",
  messagingSenderId: "375623438074",
  appId: "1:375623438074:web:6b1bf7bea9e9f896584343",
  measurementId: "G-NSB1CTNJMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);