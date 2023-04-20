import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';

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
      <View style={rightIconContainer}>{leftIcon}</View>
      <Text
        style={{
          ...styles.label,
          ...labelStyle,
        }}>
        {label}
      </Text>
      <View style={leftIconContainer}>{rightIcon}</View>
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
  },
});
