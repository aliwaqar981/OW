/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Video1} from '../../assets/images';
import {COLORS} from '../../themes';
import {Thumbnail} from '../../assets/svgicons';

const Video = () => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <ImageBackground source={Video1} style={styles.imageContainer}>
        <Thumbnail />
      </ImageBackground>
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur...
      </Text>
      <Text style={styles.time}>Lorem ipsum dolor sit amet consectetur...</Text>
    </TouchableOpacity>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    marginTop: 16,
    borderRadius: 10,
    paddingBottom: 16,
  },
  title: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '700',
    marginTop: 11,
    paddingHorizontal: 14,
  },
  time: {
    fontSize: 10,
    color: COLORS.black,
    marginTop: 5,
    paddingHorizontal: 14,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
