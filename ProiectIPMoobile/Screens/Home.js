import React from 'react';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Feather';
import { LineChart } from "react-native-chart-kit";
import { ImageBackground, Text, StyleSheet, Button, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pulse from '../Screens/Pulse';
import Temperature
 from './Temperature';
const Home = ({ navigation }) => {
  return (
    <ImageBackground style={styles.image} source={require('../assets/images/Home_img.png')} >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon style={styles.iconMenu} name="align-justify" size={35} color={colors.textBlue}></Icon>
      </TouchableOpacity>
      <Text style={styles.textHi}>Hello,</Text>
      <Text style={styles.textHi2}>Name here</Text>

      <View style={{ alignItems: 'center', marginTop: '9%' }}>
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
            backgroundColor: '#548496',
            backgroundGradientFrom: '#548496',
            backgroundGradientTo: '#2c708a',
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
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title='Puls'
            color={colors.textBlue}
          >
          </Button>
          <TouchableOpacity style={styles.transparentButton}>
            <Text style={styles.buttonText}>71bpm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='Temperatura'
            color={colors.textBlue}>

          </Button>
          <TouchableOpacity style={styles.transparentButton}>
            <Text style={styles.buttonText}>36.6°C</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewdown}>
        <TouchableOpacity style={styles.transparentButton2} onPress={() => navigation.navigate('Pulse')}>
          <View style={styles.istoricContainer}>
            <Text style={styles.buttonText}>Vezi istoric puls</Text>
            <Icon name="arrow-up-right" size={25} color={colors.textBlue}></Icon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transparentButton2} onPress={() => navigation.navigate('Temperature')}>
          <View style={styles.istoricContainer}>
            <Text style={styles.buttonText}>Vezi istoric temperatura</Text>
            <Icon name="arrow-up-right" size={25} color={colors.textBlue}></Icon>
          </View>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',

  },
  iconMenu: {
    marginTop: '4%',
    marginLeft: '4%',
  },
  viewdown: {
    marginHorizontal: '10%',
    marginTop: '10%',
  },
  textHi: {
    fontFamily: 'Nunito-Bold',
    color: colors.textBlack,
    marginBottom: 10,
    marginTop: '6%',
    fontSize: 33,
    marginLeft: '6%',
  },
  textHi2: {
    fontFamily: 'Nunito-Bold',
    color: colors.textBlack,
    marginBottom: 10,
    //marginTop: '1%',
    fontSize: 33,
    marginLeft: '6%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginTop: '10%',
  },
  istoricContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: '45%',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#025372',
    marginTop: '10%',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    color: '#025372',
    fontSize: 18,
  },
  transparentButton2: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.textGrey,
    marginTop: '5%',
  },
})

export default Home



