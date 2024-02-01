import { View, Text,StyleSheet,Pressable,GestureResponderEvent } from 'react-native'
import React from 'react'
type Value={
  onPress:(event:GestureResponderEvent)=>void;
  text:string,
  type:'PRIMARY' | 'SECONDARY'|'TERTIARY',
  bgColor:string,
  fgColor:string
}
const CustomButton = (props:Value) => {
  const {onPress,text,type,bgColor,fgColor}=props
  return (
    <Pressable onPress={onPress} 
    style={[
        styles.container,
        styles[`container_${type}`],
        bgColor? {backgroundColor:bgColor}:{},
    
        ]}>
      <Text style={[
        styles.text,
        styles[`text_${type}`],
        fgColor?{color:fgColor}:{}
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
    container:{
       
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5
    },
    container_PRIMARY:{
        backgroundColor:'#1DB954',
    },
    container_TERTIARY:{
      backgroundColor:'#1DB954',
      borderRadius:20
    },
    container_SECONDARY:{
         borderColor:'#f7c2ab',
         borderWidth:2,
         backgroundColor:'white'
    },
    text:{
        fontWeight:'bold',
        color:'white'
    },
    text_PRIMARY:{
        color:'#1DB954'
    },
    text_SECONDARY:{
        color:'green'
    }
})

export default CustomButton