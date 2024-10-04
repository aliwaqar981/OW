import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS, FONTS} from '../../themes';

type TextButtonWithIconProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  leftIconContainer?: ViewStyle;
  rightIconContainer?: ViewStyle;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  hitSlop?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};

const TextButtonWithIcon: React.FC<TextButtonWithIconProps> = ({
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
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View style={[styles.icon, leftIconContainer]}>{leftIcon}</View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={[styles.icon, rightIconContainer]}>{rightIcon}</View>
    </TouchableOpacity>
  );
};

export default TextButtonWithIcon;

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
