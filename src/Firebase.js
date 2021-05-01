import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBIwGIHcjfkvcaC97IqOlYaz9v-NjSPVg",
    authDomain: "imagesharing-de765.firebaseapp.com",
    projectId: "imagesharing-de765",
    storageBucket: "imagesharing-de765.appspot.com",
    messagingSenderId: "1054445776959",
    appId: "1:1054445776959:web:b2889191e49e244e22088a",
    measurementId: "G-REGDYEVEWY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

// Export firebase
export {db, storage};
