import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {FONTS} from '../../themes';

interface BodyPartsProps {
  backgroundColor?: string;
  label: string;
  labelColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const BodyParts: React.FC<BodyPartsProps> = ({
  backgroundColor = '#114EBE',
  label,
  labelColor = '#FFFFFF',
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.programButton, {backgroundColor}]}>
      <Text
        style={{
          fontSize: 15,
          color: labelColor,
          fontFamily: FONTS.Nunito_Regular,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default BodyParts;

const styles = StyleSheet.create({
  programButton: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    marginRight: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#114EBE',
  },
});
