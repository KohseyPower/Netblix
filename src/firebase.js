import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCNDBNTGK7DTgT6EXZx7Xoh3RZWYAK8SZQ",
    authDomain: "netblix-5ba89.firebaseapp.com",
    projectId: "netblix-5ba89",
    storageBucket: "netblix-5ba89.appspot.com",
    messagingSenderId: "92318158976",
    appId: "1:92318158976:web:e02370cc12d9255b9c5665",
    measurementId: "G-NQYDHFLSN3"
};



// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };