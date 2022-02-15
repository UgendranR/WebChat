import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH67bjuK2u2eXcC9Ef5RWxRjRb9v0jr4A",
  authDomain: "webchat-ugee.firebaseapp.com",
  projectId: "webchat-ugee",
  storageBucket: "webchat-ugee.appspot.com",
  messagingSenderId: "277888581906",
  appId: "1:277888581906:web:5f6cb2bf91d981cab5f3cb",
  measurementId: "G-LNGRSZYV3X"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;