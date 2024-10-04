import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {GlowingStar} from '../../assets/svgicons';
import {COLORS, FONTS} from '../../themes';

interface SubscriptionPackageProps {
  label: string;
  containerStyle?: ViewStyle;
}

const SubscriptionPackage: React.FC<SubscriptionPackageProps> = ({
  label,
  containerStyle,
}) => {
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
    fontFamily: FONTS.Nunito_Regular,
  },
});
