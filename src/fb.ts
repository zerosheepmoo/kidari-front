// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// fb config
const firebaseConfig = {
  apiKey: import.meta.env["FB_API"],
  authDomain: "kidaris.firebaseapp.com",
  projectId: "kidaris",
  storageBucket: "kidaris.appspot.com",
  messagingSenderId: "454638008190",
  appId: "1:454638008190:web:632007e80319f281de252f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
