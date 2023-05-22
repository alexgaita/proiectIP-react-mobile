import React from 'react';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Feather';
import { LineChart } from "react-native-chart-kit";
import {ImageBackground, Text, StyleSheet, Button, View, Image, TouchableOpacity} from 'react-native';

const Home =({navigation})=>{
    return(    
    <ImageBackground style={styles.image} source={require('../assets/images/Home_img.png')} >
    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Icon style={styles.iconMenu} name="align-justify" size={35} color={colors.textBlue}></Icon>
      </TouchableOpacity>
      <Text style={styles.textHi}>Hello,</Text>
      
      <View style={{alignItems:'center', marginTop:'25%'}}>
    <LineChart 
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={350} // from react-native
    height={220}
    
    //yAxisLabel="$"
    //yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: colors.textBlue,
      backgroundGradientFrom: colors.textBlue,
      backgroundGradientTo: colors.textBlue,
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: colors.textRed,
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  </View>
  <View style={{backgroundColor:colors.textGrey, marginTop:'5%', height:'12%',width:'100%', justifyContent:'space-between'}}>
  <Button style={{width:100}}
  title='Puls'
  color={colors.textBlue}
 > 
  </Button>
    <Button styles={{marginTop:'5%'}}
  title='Temperatura'
  color={colors.textBlue}>
    
    </Button>
  </View>
  
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
  mainView:{
    flex: 1,
   },
   image: {
     width: '100%',
     height: '100%',
   },
   iconMenu:{
    marginTop: '4%',
    marginLeft: '4%',
   },
   textHi:{
    fontFamily: 'Nunito-Bold',
    color: colors.textBlack,
    marginBottom: 10,
    marginTop: '4%',
    fontSize: 33,
    marginLeft: '5%',
   },
  })

export default Home

// <Icon style={styles.iconMenu} name="align-justify" size={35} color={colors.textBlue}></Icon>


