import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { KeyboardTypeOptions } from 'react-native'
import { Controller, Control } from 'react-hook-form'

type Values = {
  placeholder: string
  multiline: boolean
  style: string
  keyboardType: KeyboardTypeOptions
  control: Control
  name: string
  rules:{ 
    required:string,
    validate: (val: string) => string | undefined;
  
  }
}


const CustomInput = (props: Values) => {
  const { placeholder, multiline, style, keyboardType, control, name, rules } = props
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(false);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View>
          <TextInput
            label={placeholder}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            keyboardType={keyboardType}
            mode="outlined"
            style={[styles.input]}
            onFocus={handleFocus}
            theme={{ colors: { primary: error ? 'red' : isFocused ? '#e8c5b5' : 'black' } }}
            right={
              placeholder === 'Password'|| placeholder ==='Repeat Password' ? (
                <TextInput.Icon
                  icon={secureTextEntry ? 'eye-off' : 'eye'}
                  onPress={toggleSecureEntry}
                  color='#cebfb8'
                />
              ) : null
            }
          />
          {error ? <Text style={{ color: 'red',marginTop:'5%' }}>{error.message}</Text> : null}
        </View>

      )}
    />
  )
}

export default CustomInput

const styles = StyleSheet.create({


  input: {
    marginTop: 20
  }
})