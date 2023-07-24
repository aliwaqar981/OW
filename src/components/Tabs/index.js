import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../themes';

const Tabs = ({ActiveTabColor, label, onPress, labelColor}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
      <View style={{height: 3, backgroundColor: ActiveTabColor}} />
    </TouchableOpacity>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 11,
    fontFamily: FONTS.Nunito_Regular,
  },
});
