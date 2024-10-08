import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Logo, WelcomePlant} from '../../../assets/images';
import {TextButton} from '../../../components';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO */}
      <Image resizeMode="contain" source={Logo} style={styles.imageContainer} />
      {/* LINE */}
      <View style={{flexDirection: 'row', marginTop: 22}}>
        <View style={styles.line} />
        <View style={[styles.line, {backgroundColor: 'blue'}]} />
      </View>
      {/* FLOWERS */}
      <View style={styles.flowerContain}>
        <Image source={WelcomePlant} style={{width: '100%', height: '100%'}} />
      </View>
      <View style={styles.innerContainer}>
        <View>
          {/* HEADING */}
          <Text style={styles.heading}>Heading</Text>
          {/* PARAGRAPH */}
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Ut risus non tellus cras
            lectus bibendum.
          </Text>
        </View>
        <View style={styles.footer}>
          {/* PARAGRAPH */}
          <Text style={[styles.paragraph, {color: '#AAAAAA'}]}>
            Lorem ipsum dolor sit amet consectetur. Ut risus non tellus cras
            lectus bibendum.
          </Text>
          {/* COMPLETED_BUTTON */}
          <TextButton
            label={'Complete My Profile'}
            containerStyle={styles.completedButton}
            onPress={() => navigation.navigate('ProfileVerificationStep1')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: 200,
    height: 45,
    alignSelf: 'center',
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: 'red',
    flex: 1,
  },
  flowerContain: {
    height: 200,
    backgroundColor: 'red',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 45,
  },
  heading: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold,
  },
  paragraph: {
    fontSize: 12,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 6,
    fontFamily: FONTS.Nunito_Regular,
  },
  footer: {
    backgroundColor: '#F9F9F9',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: '100%',
    paddingHorizontal: 20,
  },
  completedButton: {
    height: 52,
    backgroundColor: COLORS.red,
    borderRadius: 8,
    marginTop: 30,
  },
});
