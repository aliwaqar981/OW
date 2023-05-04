/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar} from '../../assets/images';
import {COLORS} from '../../themes';
import TextButton from '../TextButton';

const EmptyState = ({title, paragraph, image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={{width: '100%', height: 250}} />
      {/* TITLE */}
      <Text style={styles.title}>{title}</Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>{paragraph}</Text>
      {/* BROESE_THERPIST */}
      <TextButton
        label={'Browse therapists'}
        containerStyle={styles.broseButton}
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#030F1C',
    fontWeight: '700',
    textAlign: 'center',
    marginHorizontal: 30,
  },
  paragraph: {
    fontSize: 12,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 8,
  },
  broseButton: {
    height: 50,
    backgroundColor: COLORS.red,
    borderRadius: 8,
    width: '100%',
    marginTop: 60,
  },
});
