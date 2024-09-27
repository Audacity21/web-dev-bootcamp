// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQSvHrSiwXsqYBaxKCX96U7NAyY7S89Q",
  authDomain: "web-bootcamp-6e261.firebaseapp.com",
  projectId: "web-bootcamp-6e261",
  storageBucket: "web-bootcamp-6e261.appspot.com",
  messagingSenderId: "337028045880",
  appId: "1:337028045880:web:cea7e6c806c5bc46381acd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
