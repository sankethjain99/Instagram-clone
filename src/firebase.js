import firebase from 'firebase'
  
const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyBGRHNWYKCtkDPWeFGKJdCsI8qGd5QC2eY",
    authDomain: "instagram-clone-9f3e0.firebaseapp.com",
    databaseURL: "https://instagram-clone-9f3e0.firebaseio.com",
    projectId: "instagram-clone-9f3e0",
    storageBucket: "instagram-clone-9f3e0.appspot.com",
    messagingSenderId: "586954852633",
    appId: "1:586954852633:web:3c10d193b392a1feaa5d88",
    measurementId: "G-8RF0XMKH61"
  });

  const db= firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export  {db, auth, storage};