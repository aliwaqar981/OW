/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {StarList} from '../../assets/svgicons';
import {FONTS} from '../../themes';

const Rating = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Rate:</Text>
      <View style={{marginVertical: 20}}>
        <StarList />
      </View>
      <TextInput
        placeholder="Write About Your Experience:"
        placeholderTextColor={'#BCBCBC'}
        style={styles.inputContainer}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FBFBFB',
    padding: 10,
    borderRadius: 10,
    marginTop: 16,
  },
  text: {
    fontSize: 11,
    color: '#263238',
    fontFamily: FONTS.Nunito_Regular,
  },
  inputContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#EB4E1F50',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});
