import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

interface TextButtonProps {
  containerStyle?: ViewStyle;
  label: string;
  labelStyle?: TextStyle;
  onPress?: () => void;
  disabled?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  containerStyle,
  label,
  labelStyle,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: FONTS.Nunito_Bold,
  },
});
