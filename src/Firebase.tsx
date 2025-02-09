// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6qTGUQ2_WzXwLAYElUYuhMdKm_JdL2BU",
  authDomain: "portfolio-ad331.firebaseapp.com",
  projectId: "portfolio-ad331",
  storageBucket: "portfolio-ad331.firebasestorage.app",
  messagingSenderId: "306631305626",
  appId: "1:306631305626:web:ae7d8847c7adeedcebf223",
  measurementId: "G-4G3362XELB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
