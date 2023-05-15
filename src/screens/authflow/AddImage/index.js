/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Camera} from '../../../assets/svgicons';
import {TextButton} from '../../../components';
import {routes} from '../../../constants';

const AddImage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* HEADING */}
        <Text style={styles.heading}>Complete My Profile</Text>
        {/* COUNTER */}
        <Text style={[styles.heading, {marginTop: 3}]}>1/7</Text>
        {/* TITLE */}
        <Text style={styles.title}>Add a Profile Image</Text>
        {/* PARAGRAPH */}
        <Text style={styles.paragraph}>
          Adding image will help more personalization
        </Text>
      </View>
      {/* ADD_PROFILE_IMAGE */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.iconContainer}>
          <Camera />
          <Text style={{color: '#606060'}}>Add Image +</Text>
        </TouchableOpacity>
      </View>
      {/*FOOTER  */}
      <View style={styles.footer}>
        {/* DISCRIPTION */}
        <Text style={styles.discription}>
          Adding image will help more personalization
        </Text>
        {/* NEXT_BUTTON */}
        <TextButton
          label={'Next'}
          containerStyle={styles.nextButton}
          onPress={() => navigation.navigate(routes.DISCRIPTION)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 16,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Bold,
  },
  title: {
    fontSize: 24,
    color: '#030F1C',
    marginTop: 22,
    fontFamily: FONTS.Nunito_Bold,
  },
  paragraph: {
    fontSize: 14,
    color: '#606060',
    marginTop: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  imageContainer: {
    backgroundColor: '#F9F9F9',
    height: 250,
    marginHorizontal: 20,
    marginTop: 23,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 18,
    justifyContent: 'space-between',
    paddingBottom: 45,
  },
  discription: {
    fontSize: 12,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Regular,
  },
  nextButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: COLORS.red,
    width: '89%',
  },
});
