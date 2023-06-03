import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack.js';
import AppStack from './navigation/AppStack.js';
import SignIn from './Screens/SignIn.js';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAw-jnwpCb4PLpLk7vzDfcYpYHcW46TwB8",
  authDomain: "test-mobile-2efa9.firebaseapp.com",
  projectId: "test-mobile-2efa9",
  storageBucket: "test-mobile-2efa9.appspot.com",
  messagingSenderId: "617252332896",
  appId: "1:617252332896:web:2d5f9aee40808b7861ea05",
  measurementId: "G-9YYPSMDMV1"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export { signOut, signInWithEmailAndPassword }


const Stack = createNativeStackNavigator();


const App = () => {
  const[user, setUser]=useState('');

  useEffect(()=>{
   onAuthStateChanged(auth, (currentUser)=>{
      console.log('Current user: ', currentUser);
      if(currentUser){
        setUser(currentUser);
      }else{
        setUser(null);
        console.log('User now: ', currentUser);
      }
    })
  }, [])

  if (!user) {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }

 };

export default App;
