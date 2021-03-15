import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALIbOGSTtDBnssuSi1L5hQStdbFwu0B08",
    authDomain: "oniweb.firebaseapp.com",
    projectId: "oniweb",
    storageBucket: "oniweb.appspot.com",
    messagingSenderId: "754301519837",
    appId: "1:754301519837:web:bac64f41aad169648a9834",
    measurementId: "G-XCT8WYH1NY"
};
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()


