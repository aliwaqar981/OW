import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AboutUsBG} from '../../../assets/images';
import {COLORS, FONTS} from '../../../themes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'AboutUs'>;

const AboutUs: FC<Props> = () => {
  return (
    <ImageBackground
      source={AboutUsBG}
      style={styles.container}
      imageStyle={styles.imageContainer}>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur icing elit. Enim sit faucibus
        aenean proin diam in erat libero, at. Aliquam adipiscing sit vel enim
        sagittis. Duis nunc quis nec pellentesque duis.
      </Text>
    </ImageBackground>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.black,
    marginTop: 200,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Regular,
  },
});
