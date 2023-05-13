/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

const TextButton = ({containerStyle, label, labelStyle, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    lineHeight: 17,
    color: COLORS.white,
    fontSize: 15,
    fontFamily: FONTS.Nunito_Bold,
  },
});
