import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

const TextButtonwithIcon = ({
  label,
  onPress,
  leftIconContainer,
  rightIconContainer,
  labelStyle,
  containerStyle,
  disabled,
  hitSlop,
  rightIcon,
  leftIcon,
}) => {
  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      disabled={disabled}
      style={{...styles.container, ...containerStyle}}
      onPress={onPress}>
      <View style={[styles.icon, leftIconContainer]}>{leftIcon}</View>
      <Text
        style={{
          ...styles.label,
          ...labelStyle,
        }}>
        {label}
      </Text>
      <View style={[styles.icon, rightIconContainer]}>{rightIcon}</View>
    </TouchableOpacity>
  );
};

export default TextButtonwithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONTS.Nunito_Regular,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
