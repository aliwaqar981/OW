import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
  Insets,
} from 'react-native';
import React, {ReactNode} from 'react';

interface ButtonWithIconProps {
  onPress?: (event: GestureResponderEvent) => void;
  icon: ReactNode;
  containerStyle?: ViewStyle;
  hitSlop?: Insets;
}

const ButtonwithIcon: React.FC<ButtonWithIconProps> = ({
  onPress,
  icon,
  containerStyle,
  hitSlop,
}) => {
  return (
    <TouchableOpacity
      hitSlop={hitSlop || {left: 10, right: 10, bottom: 10, top: 10}}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

export default ButtonwithIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
