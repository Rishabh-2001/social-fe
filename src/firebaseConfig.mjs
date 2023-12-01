// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqsubSwmbzA0KzMFEhLw_DNx8_m-MP0mA",
  authDomain: "globl-74d93.firebaseapp.com",
  projectId: "globl-74d93",
  storageBucket: "globl-74d93.appspot.com",
  messagingSenderId: "578465733602",
  appId: "1:578465733602:web:c8f2aed1d2a4de912637bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage()

export default storage;




