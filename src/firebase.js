// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA-Mq6UhLPYHb4x-XKgm0d42W-jFV-dATM",
  authDomain: "clone-d348b.firebaseapp.com",
  projectId: "clone-d348b",
  storageBucket: "clone-d348b.appspot.com",
  messagingSenderId: "221272522738",
  appId: "1:221272522738:web:cdfb7e352b473ad1d0756b",
  measurementId: "G-C71Y0VLF55",
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebaseApp.auth()
export  {db,auth}