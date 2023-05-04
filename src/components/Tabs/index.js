/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Tabs = ({ActiveTabColor, label, onPress, labelColor}) => {
  return (
    <TouchableOpacity style={{width: '33.33%'}} onPress={onPress}>
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
      <View style={{height: 3, backgroundColor: ActiveTabColor}} />
    </TouchableOpacity>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 11,
  },
});
