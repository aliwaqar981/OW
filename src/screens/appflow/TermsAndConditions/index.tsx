import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS} from '../../../themes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'TermsAndConditions'>;

const TermsAndConditions: FC<Props> = () => {
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
        vel enim sagittis. Duis nunc quis nec pellentesque duis.Lorem ipsum
        dolor sit amet, consectetur icing elit. Enim sit faucibus aenean proin
      </Text>
    </View>
  );
};

export default TermsAndConditions;

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
