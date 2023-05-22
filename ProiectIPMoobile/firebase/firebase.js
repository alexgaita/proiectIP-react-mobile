import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig={
  apiKey: "AIzaSyAw-jnwpCb4PLpLk7vzDfcYpYHcW46TwB8",
  authDomain: "test-mobile-2efa9.firebaseapp.com",
  projectId: "test-mobile-2efa9",
  storageBucket: "test-mobile-2efa9.appspot.com",
  messagingSenderId: "617252332896",
  appId: "1:617252332896:web:2d5f9aee40808b7861ea05",
  measurementId: "G-9YYPSMDMV1"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app,{
  experimentalForceLongPolling: true,
});

export {auth, signInWithEmailAndPassword, signOut, db}



