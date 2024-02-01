import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm, Control } from 'react-hook-form'
import CustomButton from '../../Components/CustomInput/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput'
import { FIREBASE_AUTH, FIREBASE_DB } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigation,ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
type data = {
  phone: string
  passkey: string
  repass: string
  Email: string
  val: string
}

const SiginUp = () => {
  const auth = FIREBASE_AUTH;
  const [userData, setUserData] = useState(null)
  const [mob, setMob] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const { control, handleSubmit, formState: { errors }, watch } = useForm<data>()
  const navigation=useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const signIn = async (data: data) => {
    console.log(data)
    setMob(data.phone)
    const email = data.Email
    const password = data.passkey
    console.log(email, password)
    if (email && password) {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user;
        
        setUserData(user)
        navigation.navigate('Home')
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          setError('Email is already in use. Please choose another email.');
        } else {
          // Handle other errors or set a generic error message
          setError('An error occurred. Please try again.');
        }
      }
    } else {
      console.log("Email or password is missing");
    }
  }
  useEffect(() => {
    if (userData) {
      const { email, uid } = userData;
      console.log(email, uid, mob, 'hisda')
      try {
        setDoc(doc(FIREBASE_DB, 'users', uid), {
          user_mob: mob,
          user_email: email
        })
      } catch (error) {

      }
    }
  }, [userData])

 const signup=()=>{
   navigation.navigate('SignIn')
 }

  return (
    <SafeAreaView>
      <Text style={{ color: 'red' }}>Hooosda</Text>
      <View style={{ padding: 20, marginHorizontal: 20 }}>
       
        
        <CustomInput
          name="Email"
          placeholder="Email "
          keyboardType='default'
          multiline={false}
          style='textinput'
          control={(control as unknown) as Control}
          rules={{
            required: 'User Name is required',
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
            required: 'Password is required',
            validate: (val) => {
              if (val.length < 8) {
                return "Your passwords should be 8 char"
              }
            }
          }}
        />
        <CustomInput
          name="repass"
          placeholder="Repeat Password"
          keyboardType='default'
          multiline={false}
          style='textinput'
          control={(control as unknown) as Control}
          rules={
            {
              required: 'Password required',
              validate: (val) => {
                if (watch('passkey') !== val) {
                  return "Your passwords do no match"
                }
              }
            }

          }
        />
        <Text style={{ color: 'red', marginTop: '5%' }}>{error}</Text>
        <View style={{ marginTop: '5%' }}>
          <CustomButton text="Register" type="PRIMARY" bgColor='#f7c2ab' fgColor='white' onPress={handleSubmit(signIn)} />
          

          <View style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'center',marginTop:20}}>
  <View style={{width:'71%'}}>
  <Text style={{fontSize:17,color:'gray'}}>Already have an account?</Text>
  </View>

  <TouchableOpacity  onPress={signup}>
    <Text style={{fontWeight:'900',fontSize:17,color:'#f7c2ab',textDecorationLine:'underline',textDecorationStyle: 'solid'}}>SignIn</Text>
  </TouchableOpacity>
    
  </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SiginUp