// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMHjW4QQIxXNgK-tj2M3oMz-vUVK8r7y4",
  authDomain: "react-chat-882f5.firebaseapp.com",
  projectId: "react-chat-882f5",
  storageBucket: "react-chat-882f5.appspot.com",
  messagingSenderId: "1077101870638",
  appId: "1:1077101870638:web:26568fae612dbfc623e9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);