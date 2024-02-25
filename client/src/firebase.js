// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a8196.firebaseapp.com",
  projectId: "mern-blog-a8196",
  storageBucket: "mern-blog-a8196.appspot.com",
  messagingSenderId: "150489197811",
  appId: "1:150489197811:web:11bdf00b555aee2520db86",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
