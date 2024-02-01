import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer,useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainContainer from '../Components/Containers/MainContainer'
import Welcome from '../screens/welcome/Welcome'
import SiginUp from '../screens/Auth/SiginUp'
import Home from '../screens/Home/Home'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer'
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import Year from '../screens/Year/Year'
export type RootStackParamList={
     SignIn:undefined
     Welcome:undefined
     SignUp:undefined
     Home:undefined
     Root:undefined
     Year:{option:string}
}

const Drawer = createDrawerNavigator();
const Rootstack=createNativeStackNavigator<RootStackParamList>();
function Root(){
  return(
    <Drawer.Navigator screenOptions={{headerShown:false,drawerLabelStyle:{fontSize:15},drawerActiveBackgroundColor:'#fff0e0',drawerActiveTintColor:'#ff8904'}} drawerContent={props => <CustomDrawer {...props} />}>
<Drawer.Screen 
name="Home" component={Home}
/>
    </Drawer.Navigator>
  )
}
const Navigation = () => {
       
  return (
    <NavigationContainer>
 <Rootstack.Navigator screenOptions={{headerShown:false}}>
 
            <Rootstack.Screen name='Welcome' component={Welcome}/>
            <Rootstack.Screen name='Root' component={Root}/>
            <Rootstack.Screen name="SignIn" component={MainContainer} />
            <Rootstack.Screen name='SignUp' component={SiginUp}/>
            <Rootstack.Screen name='Year'  component={Year}/>
          
    </Rootstack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation