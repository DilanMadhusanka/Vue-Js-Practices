import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8m9g17tuyi3eI29QPQGHlazbP2O6_xvw",
    authDomain: "food-recipe-app-c97a1.firebaseapp.com",
    databaseURL: "https://food-recipe-app-c97a1.firebaseio.com",
    projectId: "food-recipe-app-c97a1",
    storageBucket: "food-recipe-app-c97a1.appspot.com",
    messagingSenderId: "399684753494",
    appId: "1:399684753494:web:91e6ab5331f70e94ffc3f7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore()