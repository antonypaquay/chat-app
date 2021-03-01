import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDyP-TH15Q8QwqFyQYrV7csxwt7eoMIQDs",
    authDomain: "sparky-69b31.firebaseapp.com",
    databaseURL: "https://sparky-69b31-default-rtdb.europe-west1.firebasedatabase.app/"
})


// linked rebase to firebase
const base = Rebase.createClass(firebase.database());

// initialization
export { firebaseApp };

// BD
export default base;