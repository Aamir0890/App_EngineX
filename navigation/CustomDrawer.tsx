import { View, Text,ImageBackground,Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { LinearGradient } from 'expo-linear-gradient'

const CustomDrawer = (props) => {
  
  return (
    <View style={{flex:1}}>
      <LinearGradient colors={['rgba(255, 255, 255, 0.0)','rgba(142, 197, 71, 0.0)']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0.3 }}
      end={{ x: 1, y: 0.5 }}>
   <DrawerContentScrollView >
   <View style={{marginBottom:'10%',marginLeft:'10%',marginTop:'5%'}}>
   <Image source={require('../assets/user.png')} style={{height:60,width:60,marginTop:'1%'}}/>
    <Text style={{fontSize:14,color:'#f3a31c',marginTop:'5%'}}>Welcome, User</Text>
    <Text style={{color:'gray',marginTop:'5%'}}>Explore the feild of Engineering</Text>
    </View>
      
    <View style={{flex:1,paddingTop:10}}>
    <DrawerItemList {...props}/>
    </View>
     
   </DrawerContentScrollView>
   </LinearGradient>
   </View>
  )
}

export default CustomDrawer
