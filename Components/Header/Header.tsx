import { View, Text,StyleSheet,Image,useWindowDimensions,TouchableOpacity,ImageBackground } from 'react-native'
import React,{useState} from 'react'
import { DrawerActions } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const Header = () => {

    const {height}=useWindowDimensions();
    const navigation=useNavigation();
    const isDrawerOpen = navigation.getState().index===1;
    
    const handleDrawerToggle = () => {
    
      if (isDrawerOpen) {
        navigation.dispatch(DrawerActions.closeDrawer());
      } else {
        navigation.dispatch(DrawerActions.openDrawer());
      }
        };
        

  return (
         
          <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',alignItems:'center',paddingVertical:'2%',marginRight:'5%'}}>
            <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-around',width:'40%'}}>   
            <Text style={{fontSize:24,fontWeight:'400'}}>Enginx</Text>
            </View>
          
       <TouchableOpacity onPress={handleDrawerToggle}>
    <Icon name="menu" size={30} color="black"  />
    </TouchableOpacity>
    </View>
    
   
   
  )
}

export default Header


const styles=StyleSheet.create({
    logo:{  
    },
    backgroundImage:{
     
     resizeMode:'cover',
     width:'100%',
      
     
     
    }
})