import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../navigation/Navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Chip } from 'react-native-paper';
import First from './First'
import Second from './Second'
import Thirs from './Thirs'
import Fourth from './Fourth'

type YearRouteProp=RouteProp<RootStackParamList,'Year'>
const Year = () => {
      const route=useRoute<YearRouteProp>();
   const option=route.params?.option
   console.log(option)  
   const [selectedOption, setSelectedOption] = React.useState('1st year');

   const options = ['1st year', '2nd Year', '3rd Year', '4th Year'];
   const renderOptionDetails = (option:string) => {
    switch(option) {
      case '1st year':
        return <First/>
      case '2nd Year':
        return <Second/>
      case '3rd Year':
        return <Thirs/>
      case '4th Year':
        return <Fourth/>
      default:
        return null;
    }
  };
  return (
  <SafeAreaView style={{flex:1}}>
    <View>
        <View style={{alignItems:'center',justifyContent:'center',marginVertical:'8%'}}>
        <Text style={{fontSize:30,fontWeight:'400',color:'#ff8904'}}>{option}</Text>

        </View>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'center',alignItems:'center'}}>
        {options.map((option, index) => (
        <Chip
          key={index}
          selected={option === selectedOption}
          onPress={() => setSelectedOption(option)}
          style={{margin:1,backgroundColor:'#ffe4c7'}}
          selectedColor='#ff8904'
        >
          {option}
        </Chip>
      ))} 
      </View>
      {renderOptionDetails(selectedOption)}
   
    </View>
  </SafeAreaView>
  )
}

export default Year