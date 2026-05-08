// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiTfIxDnH88ZH-HmVPjygYThV-CJr8pvQ",
  authDomain: "sharp-melodic.firebaseapp.com",
  projectId: "sharp-melodic",
  storageBucket: "sharp-melodic.firebasestorage.app",
  messagingSenderId: "144525263744",
  appId: "1:144525263744:web:ab0c6216086024bf99b765"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);