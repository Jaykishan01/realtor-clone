// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjIVYGEcJ86FC-bsuYSNvEwO7M73MECp0",
    authDomain: "realtor-app-1d865.firebaseapp.com",
    projectId: "realtor-app-1d865",
    storageBucket: "realtor-app-1d865.appspot.com",
    messagingSenderId: "97539513595",
    appId: "1:97539513595:web:aefb59682577ef0350645e"
  };;

// Initialize Firebase
initializeApp(firebaseConfig);
export const db =getFirestore()