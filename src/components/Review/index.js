/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {NotoStar} from '../../assets/svgicons';

const Review = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Rate:</Text>
      <TextButtonwithIcon
        label={'5.0'}
        labelStyle={{fontSize: 18, fontWeight: '400', marginLeft: 5}}
        leftIcon={<NotoStar />}
        containerStyle={{marginTop: 20}}
        disabled
      />
      <Text style={styles.paragraph}>
        It was a nice session with dr. Walters. Loved the way he listened to the
        cause and suggest a healthy routine. I will definitely love to meet him
        again.
      </Text>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FBFBFB',
    padding: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 11,
    color: '#263238',
  },
  paragraph: {
    fontSize: 11,
    color: '#4C4C4C',
    marginTop: 12,
  },
});
