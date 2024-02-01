import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../color'
import CustomInput from '../CustomInput/CustomInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm ,Control} from 'react-hook-form'
import CustomButton from '../CustomInput/CustomButton'
import { useNavigation,ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FIREBASE_AUTH } from '../../firebase'
import { ActivityIndicator } from 'react-native-paper'
import { signInWithEmailAndPassword } from 'firebase/auth'
const { primary } = colors
import {GoogleSignin} from '@react-native-google-signin/google-signin'

type data={
  Email:string,
  passkey:string
}
const MainContainer = () => {
  
  const navigation=useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { control, handleSubmit, formState: { errors } } = useForm<data>()
  const [loading,setLoading]=useState(false)
   const [error,setError]=useState<String>()
  const signIn=async(data:data)=>{
    console.log(data)
    const user_name=data.Email
    const pass=data.passkey
    console.log("pred")
    console.log(user_name,data.passkey)
     setLoading(true)
   try{
  
  const response=await signInWithEmailAndPassword(auth,user_name,pass);
  console.log(response)
  navigation.navigate('Root',{screen:"Home"}); 
    
   }catch(error:any){
    console.log(error)
    setError("Invalid Credentials")

   }finally{
    setLoading(false)
   }

  }
  const register=()=>{
navigation.navigate("SignUp")
  }
  
   useEffect(()=>{
   GoogleSignin.configure({
    webClientId:""
   })
   },[])
   const auth=FIREBASE_AUTH
  const googleSingin=async()=>{
    try {
      await GoogleSignin.hasPlayServices();
      const user=await GoogleSignin.signIn();
      if(user){
        console.log(user)
        navigation.navigate('Root',{screen:"Home"}); 
      }
    } catch (error) {
        console.log(error)
    }
      
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <Text>MainContainer</Text>
        
        <View style={{ padding: 20, marginHorizontal: 20 }}>
        <CustomInput
            name="Email"
            placeholder="Email "
            keyboardType='default'
            multiline={false}
            style='textinput'
            control={(control as unknown) as Control}
            rules={{ 
                required:'User Name is required',
                validate: (val) => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!emailRegex.test(val)) {
                  return "Please enter a valid email address";
                }
              }
        }}
          />
          <CustomInput
            name="passkey"
            placeholder="Password"
          
            keyboardType='default'
            multiline={false}
            style='textinput'
            control={(control as unknown) as Control}
            rules={{  
                required:'Password is required',
                validate: (val) => {
                if ( val.length<8) {
                  return "Your passwords should be 8 char"
                }
              }}}
          />
          <Text style={{color:'red'}}>{error}</Text>
          <View style={{marginTop:'5%'}}>
            {loading?<ActivityIndicator size='large' color="#0000ff"/>
          :<>

<CustomButton text="SignIn" type="PRIMARY" bgColor='#f7c2ab' fgColor='white' onPress={handleSubmit(signIn)}/>
<View style={{marginVertical:'3%'}}/>
<View style={{alignItems:'center'}}>
  <View style={{borderWidth:1,borderBottomColor: '#000000'}}/>
<Text style={{fontSize:17,color:'#f7c2ab'}}>or continue with</Text>
</View>

   
   <View style={{backgroundColor:'white',width:'100%',height:'20%',alignItems:'center',justifyContent:'center',marginTop:'5%',borderRadius:5}}>
    <TouchableOpacity style={{flexDirection:'row'}} onPress={googleSingin}>
      <Image source={require('../../assets/google.png')} style={{height:25,width:25,marginRight:'5%'}}/>
      <Text style={{fontSize:16,color:'#f7c2ab'}}>Continue with Google</Text>
    </TouchableOpacity>
   </View>

<View style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center',marginTop:20}}>
  <View style={{width:205}}>
  <Text style={{fontSize:17,color:'gray'}}>Don't have an account?</Text>
  </View>

  <TouchableOpacity  onPress={register}>
    <Text style={{fontWeight:'900',fontSize:17,color:'#f7c2ab'}}>SignUp</Text>
  </TouchableOpacity>
    
  </View>
   
          </>
          }

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainContainer

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: `${primary}`,

  },
  container: {
    flex: 1
  },
})