import firebase from 'firebase'
import firestore from 'firebase/firestore';
const config = {
    apiKey: "AIzaSyA8Gh-uupDNP1PJ_bLSfxm7U3Hp4X1ng1A",
    authDomain: "bcar-a613d.firebaseapp.com",
    databaseURL: "https://bcar-a613d.firebaseio.com",
    projectId: "bcar-a613d",
    storageBucket: "bcar-a613d.appspot.com",
    messagingSenderId: "642714035137"
};
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {db, }