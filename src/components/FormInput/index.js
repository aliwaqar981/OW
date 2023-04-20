/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';

const FormInput = ({
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  containerStyle,
  icon,
  leftIcon,
  righIcon,
  leftIconStyle,
  rightIconstyle,
  onBlur,
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      {leftIcon && (
        <View style={{...leftIconStyle, width: 25, marginRight: 10}}>
          {leftIcon}
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={{
          color: COLORS.black,
          flex: 1,
          fontSize: 12,
          fontWeight: '400',
        }}
        onBlur={onBlur}
      />
      <TouchableOpacity style={{...rightIconstyle}}>
        {righIcon}
      </TouchableOpacity>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderColor: COLORS.borderColor,
    paddingHorizontal: 18,
    backgroundColor: '#F9F9F9',
  },
});
