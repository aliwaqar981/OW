import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

const PaymentCard = ({label, containerStyle, selectedCard, logo, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {...containerStyle}]}
      onPress={onPress}>
      {selectedCard}
      <Text style={styles.label}>{label}</Text>
      {logo}
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    height: 96,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: COLORS.black,
    marginLeft: 12,
    flex: 1,
    fontFamily: FONTS.Nunito_Bold,
  },
});
