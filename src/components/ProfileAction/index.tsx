import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  ReactNode,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

interface ProfileActionProps {
  containerStyle?: ViewStyle;
  LeftIcon?: ReactNode;
  labelStyle?: TextStyle;
  RightIcon?: ReactNode;
  onPress?: () => void;
  label: string;
  iconBackgroundColor?: string;
}

const ProfileAction: React.FC<ProfileActionProps> = ({
  containerStyle,
  LeftIcon,
  labelStyle,
  RightIcon,
  onPress,
  label,
  iconBackgroundColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: iconBackgroundColor
              ? iconBackgroundColor
              : COLORS.black,
          },
        ]}>
        {LeftIcon}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {RightIcon}
    </TouchableOpacity>
  );
};

export default ProfileAction;

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#F9F9F9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    paddingLeft: 12,
    paddingRight: 8,
  },
  label: {
    fontSize: 14,
    marginLeft: 8,
    color: COLORS.black,
    flex: 1,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
