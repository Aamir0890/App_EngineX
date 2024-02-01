import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { KeyboardTypeOptions } from 'react-native'
type Values = {
    placeholder: string
    multiline: boolean
    style: object
    keyboardType: KeyboardTypeOptions
    name: string
    options: string[]
  }
const CustomSearch = (props:Values& { onSelect: (option: string) => void }) => {
    
    const { placeholder, multiline, style, keyboardType, name, options ,onSelect} = props
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
  
    const handleSearch = (searchText: string) => {
      const results = options.filter(option => option.toLowerCase().includes(searchText.toLowerCase()));
      setSearchResults(results);
    };
    const handleSelectOption = (option: string) => {
        setValue(option);
        setSearchResults([]);
        onSelect(option);

      };
  return (
    <View>
    <TextInput
      label={placeholder}
      value={value}
      onChangeText={(text) => {setValue(text); handleSearch(text);}}
      multiline={multiline}
      keyboardType={keyboardType}
      mode="outlined"
      style={styles.input}
      theme={{ colors: { primary: '#ff8904'},roundness:20}}
    />
    {searchResults.map((result, index) => (
      <TouchableOpacity key={index} onPress={() => handleSelectOption(result)}>
      <Text style={{color:'gray',marginVertical:'5%'}}>{result}</Text>
    </TouchableOpacity>
    ))}
  </View>
  )
}

export default CustomSearch
const styles = StyleSheet.create({
    input: {
      marginTop: 20,
      borderColor:'blue',
    
    }
  })