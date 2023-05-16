/* eslint-disable curly */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../constants';

const AppText = ({error, visible, style}) => {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={[styles.error, style]}>{error}</Text>
    </View>
  );
};

export default AppText;

const styles = StyleSheet.create({
  error: {
    marginLeft: 12,
    marginTop: 3,
    fontFamily: FONTS.marginLeft,
    color: 'red',
  },
});
