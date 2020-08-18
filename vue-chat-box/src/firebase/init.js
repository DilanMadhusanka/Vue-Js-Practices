import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA63ffbmG0rLHR9mD2KowjWPv6XKa5JjGU",
    authDomain: "simple-chat-box-with-vue.firebaseapp.com",
    databaseURL: "https://simple-chat-box-with-vue.firebaseio.com",
    projectId: "simple-chat-box-with-vue",
    storageBucket: "simple-chat-box-with-vue.appspot.com",
    messagingSenderId: "712265466565",
    appId: "1:712265466565:web:34873b5d9f2f7a88a7a6ac"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();