/* eslint-disable react-native/no-inline-styles */
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Blog, Video1} from '../../../assets/images';
import {Thumbnail} from '../../../assets/svgicons';

const VideoBlogs = () => {
  return (
    <View style={styles.container}>
      {/* IMAGE */}
      <ImageBackground source={Video1} style={styles.imageContainer}>
        <Thumbnail />
      </ImageBackground>
      {/* TITLE */}
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur...
      </Text>
      {/* TIME */}
      <Text style={styles.timeText}>05:00</Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur. Etiam faucibus vestibulum tortor
        nunc donec ipsum aliquam rhoncus. Nibh in neque arcu non elit proin.
        Curabitur ac turpis ipsum egestas est odio erat.{' '}
      </Text>
    </View>
  );
};

export default VideoBlogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#989898',
    fontFamily: FONTS.Nunito_Regular,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    color: '#2C2C2C',
    fontFamily: FONTS.Nunito_SemiBold,
    paddingTop: 24,
  },
  timeText: {
    fontSize: 12,
    color: '#525252',
    fontFamily: FONTS.Nunito_Light,
    paddingVertical: 10,
  },
});
