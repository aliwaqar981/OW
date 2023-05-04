import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlowingStar} from '../../assets/svgicons';
import {COLORS} from '../../themes';

const SubscriptionPackage = ({label, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <GlowingStar />
      <Text style={styles.pointLabel}>{label}</Text>
    </View>
  );
};

export default SubscriptionPackage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointLabel: {
    fontSize: 11,
    color: COLORS.black,
    flex: 1,
    marginLeft: 12,
  },
});
