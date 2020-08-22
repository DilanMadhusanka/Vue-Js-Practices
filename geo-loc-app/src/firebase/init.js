import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7PAyR65YsIKSzvGc476VS0xTceiI04W8",
    authDomain: "geo-loc-app.firebaseapp.com",
    databaseURL: "https://geo-loc-app.firebaseio.com",
    projectId: "geo-loc-app",
    storageBucket: "geo-loc-app.appspot.com",
    messagingSenderId: "199837273549",
    appId: "1:199837273549:web:9d722338efbfa46ac3c884"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()