/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const Body_Parts = ({backgroundColor, label, labelColor, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.programButton,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <Text
        style={{
          fontSize: 15,
          color: labelColor,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Body_Parts;

const styles = StyleSheet.create({
  programButton: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    backgroundColor: '#114EBE',
    marginRight: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#114EBE',
  },
});
