import { View, Text, TouchableOpacity,Image, ScrollView, ImageBackground ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomSearch from '../../Components/CustomInput/CustomSearch'
import CustomButton from '../../Components/CustomInput/CustomButton'
import Header from '../../Components/Header/Header'
import { useNavigation,ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
const Home = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigation=useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const filter = (value: string) => {
    // Return an array of options based on the input value
    // For example, you can use a predefined array of options and filter it by the value
   
    return options.filter((option) => option.toLowerCase().startsWith(value.toLowerCase()));
  };

  // Define a function that handles the selection logic
  const onSelect = (option: string) => {
    // Do something with the selected option
    setSelectedOption(option)
    // For example, you can use an alert to show the option
    alert(`You selected ${option}`);
    if(option!==null){
      navigation.navigate("Year",{option:option})
    }
  };
  const options = ['Mechanichal', 'Civil', 'Electrical','Computer Science','Electronics and Communication','Instrumentation','Artificial Intelligence & Machine Learning']; 
  return (
    
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
    
       <Header/>
      <View style={{marginLeft:'5%'}}>
     
     
      
      
      
      <View style={{marginHorizontal:'5%'}}>
      <CustomSearch
          placeholder="Search Stream"
          multiline={false}
          style={{ color: 'blue' }}
          keyboardType="default"
          name="search"
          options={options}
          onSelect={onSelect}
        />
      </View>
      </View>
      <View style={{marginHorizontal:'20%',marginTop:'5%'}}>
      <CustomButton
          text="Search"
          type="TERTIARY"
          bgColor="#fff0e0"
          fgColor="#ff8904"
          onPress={() => onSelect(selectedOption)}
        />
      </View>
      <ScrollView>
      <View style={styles.container}>
  <View style={styles.row}>
    <View style={{width:'48%'}}>
      <TouchableOpacity>
    <ImageBackground
      source={require('../../assets/upse.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>UPSE</Text>
    </ImageBackground>
    </TouchableOpacity>
    </View>
    <View style={{width:'48%'}}>
    <ImageBackground
      source={require('../../assets/gate.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>GATE</Text>
    </ImageBackground>
    </View>
   
  </View>
</View>
<View style={styles.container}>
  <View style={styles.row}>
    <View style={{width:'48%'}}>
      <TouchableOpacity>
    <ImageBackground
      source={require('../../assets/comp.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>Software Dev</Text> 
    </ImageBackground>
    </TouchableOpacity>
    </View>
    <View style={{width:'48%'}}>
    <ImageBackground
      source={require('../../assets/ai.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>AI&ML</Text>
    </ImageBackground>
    </View>
   
  </View>
</View>
<View style={styles.container}>
  <View style={styles.row}>
    <View style={{width:'48%'}}>
      <TouchableOpacity>
    <ImageBackground
      source={require('../../assets/language.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>Language</Text>
    </ImageBackground>
    </TouchableOpacity>
    </View>
    <View style={{width:'48%'}}>
    <ImageBackground
      source={require('../../assets/start.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>StartUp</Text>
    </ImageBackground>
    </View>
   
  </View>
</View><View style={styles.container}>
  <View style={styles.row}>
    <View style={{width:'48%'}}>
      <TouchableOpacity>
    <ImageBackground
      source={require('../../assets/cat.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>CAT</Text>
    </ImageBackground>
    </TouchableOpacity>
    </View>
    <View style={{width:'48%'}}>
    <ImageBackground
      source={require('../../assets/ms.jpg')}
      style={styles.card}
      resizeMode="cover"
    >
      <Text style={styles.text}>Masters Abroad</Text>
    </ImageBackground>
    </View>
   
  </View>
</View>
   </ScrollView>
  
    </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop:'5%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  card: {
    width: '100%', // Adjust as needed for equal size
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end', // Align text at the bottom
    backgroundColor:'red',
    
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
    paddingVertical: 5,
  },
});
