import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

interface TextInputCmpProps extends TextInputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  icon?: React.ReactNode;
  label: string;
  containerStyle?: object;
  multiline?: boolean;
  style?: object;
}

const TextInputCmp: React.FC<TextInputCmpProps> = ({
  placeholder,
  placeholderTextColor,
  icon,
  label,
  containerStyle,
  multiline,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.textInput, style]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={{flex: 1, fontFamily: FONTS.Nunito_Regular}}
          multiline={multiline}
          {...props}
        />
        {icon}
      </View>
    </View>
  );
};

export default TextInputCmp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  textInput: {
    height: 51,
    backgroundColor: '#F9F9F9',
    marginTop: 9,
    paddingHorizontal: 14,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
});
