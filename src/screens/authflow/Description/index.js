/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {TextButton} from '../../../components';
import {routes} from '../../../constants';

const Description = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* HEADING */}
        <Text style={styles.heading}>Complete My Profile</Text>
        {/* COUNTER */}
        <Text style={[styles.heading, {marginTop: 3}]}>1/7</Text>
        {/* TITLE */}
        <Text style={styles.title}>Tell us a bit about yourself & Work</Text>
        {/* DISCRIPTION */}
        <Text style={styles.discrption}>Edit description </Text>
        {/* PARAGRAPH */}
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Ac etiam tincidunt dignissim
          erat sit dolor vulputate. Amet ornare viverra nunc fusce in. Egestas
          sed quis aliquet leo proin dolor diam. Vivamus gravida id cras
          consequat in. Nisl cursus aliquam etiam massa. Pellentesque congue
          aliquam faucibus leo. Scelerisque tellus risus semper lacinia purus
          eget diam habitant orci. Eu vestibulum ornare mus in vitae. Nulla eget
          pellentesque ornare natoque aliquet lectus at ultricies quis.
        </Text>
      </View>
      <View style={styles.footer}>
        <TextButton
          label={'Next'}
          containerStyle={styles.nextButton}
          onPress={() => navigation.navigate(routes.PROFILEIMAGE)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Description;

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
  discrption: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 23,
    fontFamily: FONTS.Nunito_Regular,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.black,
    marginTop: 3,
    fontFamily: FONTS.Nunito_Medium,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    paddingBottom: 45,
  },
  nextButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: COLORS.red,
  },
});
