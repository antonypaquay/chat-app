import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsTf6EmdP3Wn4mZxp8SMr09Ar47fBNZIU",
    authDomain: "chat-9309c.firebaseapp.com",
    databaseURL: "https://chat-9309c.firebaseio.com"
})


// linked rebase to firebase
const base = Rebase.createClass(firebase.database());

// initialization
export { firebaseApp };

// BD
export default base;