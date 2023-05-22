import React from "react"
import colors from '../assets/colors/colors'; 
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'
import{DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { auth, signOut } from "../firebase/firebase";

const CustomDrawer = (props,{navigation}) =>{
    const handleSignOut =() =>{
        signOut(auth)
        .then(() => {
          console.log('User logged out.');
        })
        .catch((error) => {
        });
    }
    return (
        <ImageBackground source={require('../assets/images/Menu_img.png')} style={{width:'100%',height:'100%'}}>
            <DrawerContentScrollView {...props} style={{marginTop:'34%'}} >
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View>
                <TouchableOpacity style={{paddingVertical:25}}>
                    <Text style={styles.logoutStyle}
                    onPress={handleSignOut}>Log Out</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>QuantumHealth©</Text>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
   textStyle:{
      fontFamily: 'Nunito-MediumItalic',
      color: colors.textPeach,
      marginBottom: 15,
      fontSize: 20,
      paddingLeft:50,
      borderTopWidth:0.8, //StyleSheet.hairlineWidth
      borderTopColor:colors.textGrey,
      marginTop:-15,
     },
  logoutStyle:{
      fontFamily: 'Nunito-Bold',
      color: colors.textWhite,
      fontSize: 24,
      marginLeft: 80,
  },
    })

export default CustomDrawer