import firebase from "firebase/app";
import "firebase/auth"; 

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: "auth-development-4504c.appspot.com",
    messagingSenderId: "523807878886",
    appId: "1:523807878886:web:45cc3ff994adbdf8779527"
})