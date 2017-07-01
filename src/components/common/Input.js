import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { textStyle, textInputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        style={textInputStyle}
      />
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },

  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };
