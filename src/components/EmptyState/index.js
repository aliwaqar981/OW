/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Calendar} from '../../assets/images';
import {COLORS, FONTS} from '../../themes';
import TextButton from '../TextButton';

const EmptyState = ({title, paragraph, image, labelStyle, paragraphStyle}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={{width: '100%', height: 250}} />
      {/* TITLE */}
      {title && <Text style={[styles.title, labelStyle]}>{title}</Text>}
      {/* PARAGRAPH */}
      <Text style={[styles.paragraph, paragraphStyle]}>{paragraph}</Text>
      {/* BROESE_THERPIST */}
      {title && (
        <TextButton
          label={'Browse therapists'}
          containerStyle={styles.broseButton}
        />
      )}
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
    textAlign: 'center',
    marginHorizontal: 30,
    fontFamily: FONTS.Nunito_ExtraBold,
  },
  paragraph: {
    fontSize: 12,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 8,
    fontFamily: FONTS.Nunito_Regular,
  },
  broseButton: {
    height: 50,
    backgroundColor: COLORS.red,
    borderRadius: 8,
    width: '100%',
    marginTop: 60,
  },
});
