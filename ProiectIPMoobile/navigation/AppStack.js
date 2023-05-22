import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Screens/Home.js';
import CalendarScreen from '../Screens/Calendar.js';
 
import CustomDrawer from '../components/customDrawer.js';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return(
        <Drawer.Navigator 
          drawerContent={props => <CustomDrawer{...props}/>} 
          screenOptions={{drawerActiveTintColor:'#F27D70', drawerInactiveTintColor:'#FFFFFF', //drawerActiveBackgroundColor:'#00000000',
            drawerLabelStyle:{fontFamily:'Nunito-Bold', fontSize:25}, headerShown:false}} >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Calendar" component={CalendarScreen} />
        </Drawer.Navigator>
    )
}



export default AppStack