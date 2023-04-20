import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../themes';

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 17, fontWeight: '400', color: COLORS.black}}>
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
        vel enim sagittis. Duis nunc quis nec pellentesque duis.Lorem ipsum
        dolor sit amet, consectetur icing elit. Enim sit faucibus aenean proin
        diam in erat libero, at. Aliquam adipiscing sit vel enim sagittis. Duis
        nunc quis nec pellentesque duis.Lorem ipsum dolor sit amet, consectetur
        icing elit.
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
});
