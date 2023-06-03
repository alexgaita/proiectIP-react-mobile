import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //here


import Home from '../Screens/Home.js';
import CalendarScreen from '../Screens/Calendar.js';
import CustomDrawer from '../components/customDrawer.js';
import Pulse from '../Screens/Pulse.js'; //here
import Temperature from '../Screens/Temperature.js';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator(); //here


const AppStack1 = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pulse" component={Pulse} />
        <Stack.Screen name="Temperature" component={Temperature}/>
      </Stack.Navigator>
    );
  };

const AppStack = () => {
    return(
        <Drawer.Navigator 
          drawerContent={props => <CustomDrawer{...props}/>} 
          screenOptions={{drawerActiveTintColor:'#F27D70', drawerInactiveTintColor:'#FFFFFF', //drawerActiveBackgroundColor:'#00000000',
            drawerLabelStyle:{fontFamily:'Nunito-Bold', fontSize:25}, headerShown:false}} >
            <Drawer.Screen name="Home" component={AppStack1}/>
            <Drawer.Screen name="Calendar" component={CalendarScreen} />
        </Drawer.Navigator>
    )
}



export default AppStack