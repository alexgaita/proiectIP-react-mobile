import React, {useState} from 'react';
import colors from '../assets/colors/colors';
import {Alert, TextInput, ImageBackground, Text, StyleSheet, Button, View, Image, TouchableOpacity} from 'react-native';
//import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, signInWithEmailAndPassword } from '../App';

const SignIn =  ({navigation}) =>{
  const[email, setEmail] = useState('');
  const[passwd, setPasswd] = useState('');

  const handleSignIn =  () => {
    try {
      console.log('Before login...');
      signInWithEmailAndPassword(auth, email, passwd)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User signed in:', user);
      })
    } catch (error) {
      console.log('Sign-in error:', error);
      Alert.alert('Error', 'Failed to sign in. Please check your credentials.');
    }
  };
 
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