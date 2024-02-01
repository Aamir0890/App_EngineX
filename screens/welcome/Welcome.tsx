import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import CustomButton from '../../Components/CustomInput/CustomButton'
import { useNavigation,ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { getAuth,onAuthStateChanged } from 'firebase/auth'

const Welcome = () => {
  const navigation=useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const [user,setUser]=useState<any>()
    
    useEffect(() => {
      const auth = getAuth();
      const subscriber = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          navigation.navigate('Root',{screen:"Home"}); // Navigate to Home if user is logged in
        }
      });
      
      return subscriber;
    }, [navigation]); 

    const press=()=>{
      navigation.navigate('SignUp')
      console.log('hii')
    }
    const login=()=>{
      navigation.navigate('SignIn')
    }
    useEffect(()=>{
   
    },[])
  return (
    
        <View
      
      style={{backgroundColor:'#e8c5b5',flex:1,marginTop:'10%'}}
        >
          <View style={{flexDirection:'row'}}>
            <Image source={require("../../assets/hero1.jpg")}
            style={{
                height:100,
                width:100,
                borderRadius:20,
                position:'absolute',
                top:10,
                transform:[
                    {translateX:20},
                    {translateY:50},
                    {rotate:"-15deg"}
                ]

            }}
            />
             <Image source={require("../../assets/study.jpg")}
            style={{
                height:100,
                width:100,
                borderRadius:20,
                position:'absolute',
                left:120,
                top:10,
                transform:[
                    {translateX:20},
                    {translateY:50},
                    {rotate:"-5deg"}
                ]

            }}
            />
              <Image source={require("../../assets/pic2.jpg")}
            style={{
                height:100,
                width:100,
                borderRadius:20,
                position:'absolute',
                left:-20,
                top:130,
                transform:[
                    {translateX:20},
                    {translateY:50},
                    {rotate:"15deg"}
                ]

            }}
            />
            <Image
             source={require("../../assets/study2.jpg")}
             style={{height:200,
             width:200,
             borderRadius:20,
             top:190,
             left:100,
             transform:[
                {translateX:50},
                {translateY:50},
                {rotate:"-15deg"}
             ]
            }}
            />
          </View>
          <View style={{paddingHorizontal:22,
        position:"absolute",top:450,width:"100%"}}>
            <Text style={{
           fontSize:50,
           fontWeight:"bold",
           color:"white"
            }}>Let's Get</Text>
            <Text style={{
           fontSize:46,
           fontWeight:"bold",
           color:"white"
            }}>Started</Text>
            <Text style={{fontSize:16,color:'white',fontWeight:'400'}}>Confused about your career ?</Text>
            <Text style={{fontSize:16,color:'white',marginBottom:'5%'}}>Get guidence</Text>
            <CustomButton text="Join Now" type="PRIMARY" bgColor='white'fgColor='#e8c5b5' onPress={press}/>
            <View style={{flexDirection:'row',marginTop:12,justifyContent:'center'}}>
                <Text style={{color:'white'}}>Already have an account?</Text>
                <Pressable onPress={login}>
                    <Text style={{fontWeight:'bold',color:'white',marginLeft:4}}>Login</Text>
                </Pressable>
            </View>
          </View>
        </View>  
  )
}

export default Welcome