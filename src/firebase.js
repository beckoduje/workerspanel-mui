// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADPNPPpDrgtiML8gAD5_GrMY7Rezgad6U",
  authDomain: "workers-panel-mui.firebaseapp.com",
  projectId: "workers-panel-mui",
  storageBucket: "workers-panel-mui.appspot.com",
  messagingSenderId: "1039366036284",
  appId: "1:1039366036284:web:90142ac33158b28a235c39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
