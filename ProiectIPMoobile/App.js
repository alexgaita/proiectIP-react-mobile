import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './navigation/AuthStack.js';
import AppStack from './navigation/AppStack.js';
import { auth } from './firebase/firebase.js';

const Stack = createNativeStackNavigator();

const App  = () => {
  const [initializing, setInitializing]=useState(true);
  const[user, setUser]=useState();


  useEffect(()=>{

    auth.onAuthStateChanged(currentUser=>{
      // console.log(currentUser)
      if(currentUser){
        setUser(currentUser);
      }else{
        setUser(null);
      }
    })
  }, [])

  

    if(!user) {
      return(
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
      )
    } else{
      return(
        <NavigationContainer>
          <AppStack/>
        </NavigationContainer>
      )
    }
};

export default App;
