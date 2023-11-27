// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA1Gag4Jnqugh6tSmETrCwD0qcYlQES9Co",
  authDomain: "miniblog-ref-fdfe2.firebaseapp.com",
  projectId: "miniblog-ref-fdfe2",
  storageBucket: "miniblog-ref-fdfe2.appspot.com",
  messagingSenderId: "585480513335",
  appId: "1:585480513335:web:cb422adf1ff843b126dcb2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };