/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur. Facilisis non et vitae aenean et
        mauris ut congue interdum.Lorem ipsum dolor sit amet, consectetur icing
        elit. Enim sit faucibus aenean proin diam in erat libero, at. Aliquam
        adipiscing sit vel enim sagittis. Duis nunc quis nec pellentesque
        duis.Lorem ipsum dolor sit amet, consectetur icing elit. Enim sit
        faucibus aenean proin diam in erat libero, at. Aliquam adipiscing sit
        vel enim sagittis. Duis nunc quis nec pellentesque duis.Lorem ipsum
        dolor sit amet, consectetur icing elit. Enim sit faucibus aenean proin
        diam in erat libero, at. Aliquam adipiscing sit vel enim sagittis. Duis
        nunc quis nec pellentesque duis.Lorem ipsum dolor sit amet, consectetur
        icing elit. Enim sit faucibus aenean proin diam in erat libero, at.
        Aliquam adipiscing sit vel enim sagittis. Duis nunc quis nec
        pellentesque duis.Lorem ipsum dolor sit amet, consectetur icing elit.
        Enim sit faucibus aenean proin diam in erat libero, at. Aliquam
        adipiscing sit vel enim sagittis. Duis nunc quis nec pellentesque
        duis.Lorem ipsum dolor sit amet, consectetur icing elit. Enim sit
        faucibus aenean proin diam in erat libero, at. Aliquam adipiscing sit
      </Text>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  paragraph: {
    fontSize: 17,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Regular,
  },
});
