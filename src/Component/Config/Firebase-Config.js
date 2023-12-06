
import { initializeApp } from "firebase/app";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdO0imjyAPRZeNmvx7HI3b9draaOC9jRQ",
  authDomain: "news-app-triveous.firebaseapp.com",
  projectId: "news-app-triveous",
  storageBucket: "news-app-triveous.appspot.com",
  messagingSenderId: "82558096592",
  appId: "1:82558096592:web:0caab680f1044228cebad5"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);