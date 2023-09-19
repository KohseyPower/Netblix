import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNDBNTGK7DTgT6EXZx7Xoh3RZWYAK8SZQ",
    authDomain: "netblix-5ba89.firebaseapp.com",
    projectId: "netblix-5ba89",
    storageBucket: "netblix-5ba89.appspot.com",
    messagingSenderId: "92318158976",
    appId: "1:92318158976:web:e02370cc12d9255b9c5665",
    measurementId: "G-NQYDHFLSN3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth };
export default db;