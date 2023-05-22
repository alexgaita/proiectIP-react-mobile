import React, {useState} from 'react';
import colors from '../assets/colors/colors';
import {TextInput, ImageBackground, Text, StyleSheet, Button, View, Image, TouchableOpacity} from 'react-native';
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
//const auth = getAuth();

const SignIn =  ({navigation}) =>{
  const[email, setEmail] = useState('');
  const[passwd, setPasswd] = useState('');
  const[error, setError] = useState('');

  const handleSignIn = async() => {
    console.log("intra aici")
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, passwd);
      const user = userCredential.user;
      // console.log(user)
      
      console.log('User logged in.');
    } catch (error) {
      console.error(error)
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setError(errorMessage);
    }
  }
 
    return(
        <View style={styles.mainView}>
            <ImageBackground source={require('../assets/images/LogIn_img.png')} style={styles.image} >
            <TextInput placeholder='Email address' placeholderTextColor={colors.textGrey}
             style={styles.inputBox}
             value={email}
             onChangeText={(val)=>setEmail(val)}
            />
            <TextInput placeholder='Password' placeholderTextColor={colors.textGrey}
             style={styles.inputBox}
             value={passwd}
             onChangeText={(val)=>setPasswd(val)}
             secureTextEntry={true}
            />
            <Text style={styles.textStyle2}> Forgot password? </Text>
            <TouchableOpacity style = {styles.button} > 
              <Text 
              style = {styles.textStyle}
              onPress={handleSignIn}
              >
              Log In
              </Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainView:{
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'center',
    },
    image: {
      //width: '100%',
      //height: '100%',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle:{
      color: colors.textWhite,
      fontFamily: 'Nunito-Medium',
      fontSize: 22,
    },
    textStyle2:{
      color: colors.textBlue,
      fontFamily: 'Nunito-MediumItalic',
      fontSize: 17,
      left: '22%',
      top: '21%',
    },
    inputBox:{
      width: '84%',
      top: '23%',
      height: 46,
      backgroundColor: colors.textWhite,
      borderColor: colors.textGrey,
      borderWidth: 1.5,
      borderRadius: 8,
      marginBottom: 22,
    },
    button:{
      width: '84%',
      height: 46,
      backgroundColor: colors.textBlue,
      borderColor: colors.textGrey,
      borderWidth: 1.5,
      borderRadius: 8,
      top: '26%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

export default SignIn

//onPress={navigate}