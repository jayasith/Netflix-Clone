import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCGeq7HdRczDPz7VqVvXJz3DNpmL32RzVE',
  authDomain: 'netflix-clone-9bfb3.firebaseapp.com',
  projectId: 'netflix-clone-9bfb3',
  storageBucket: 'netflix-clone-9bfb3.appspot.com',
  messagingSenderId: '961612697795',
  appId: '1:961612697795:web:2dbf59900b77ae2ca61276',
  measurementId: 'G-XD3GV0EMF4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
