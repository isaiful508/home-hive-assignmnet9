// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT6UBLxnsoBeOU6G9v21du-Jk2pzYT44E",
  authDomain: "homehive-assignmnet9-auth.firebaseapp.com",
  projectId: "homehive-assignmnet9-auth",
  storageBucket: "homehive-assignmnet9-auth.appspot.com",
  messagingSenderId: "721686861743",
  appId: "1:721686861743:web:0ec24b6655d94273fb815a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);