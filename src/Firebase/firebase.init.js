// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf1gAn9_JZtjvq9kyUn69DNKn2d3UWMX8",
  authDomain: "server-sentinel-firebase.firebaseapp.com",
  projectId: "server-sentinel-firebase",
  storageBucket: "server-sentinel-firebase.firebasestorage.app",
  messagingSenderId: "887838862691",
  appId: "1:887838862691:web:47a7c87ded5339ebb6f756",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
