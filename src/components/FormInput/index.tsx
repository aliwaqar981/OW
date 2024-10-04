import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '../../themes';

interface FormInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  leftIcon?: React.ReactNode;
  righIcon?: React.ReactNode;
  leftIconStyle?: ViewStyle;
  rightIconstyle?: ViewStyle;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  placeholderTextColor,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  containerStyle,
  icon,
  leftIcon,
  righIcon,
  leftIconStyle,
  rightIconstyle,
  onBlur,
  ...rest // spread the remaining TextInputProps
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      {leftIcon && (
        <View style={{...leftIconStyle, width: 25, marginRight: 10}}>
          {leftIcon}
        </View>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={{
          color: COLORS.black,
          flex: 1,
          fontSize: 14,
          fontFamily: FONTS.Nunito_Regular,
        }}
        onBlur={onBlur}
        {...rest} // pass remaining TextInputProps
      />
      <TouchableOpacity style={{...rightIconstyle}}>
        {righIcon}
      </TouchableOpacity>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderColor: COLORS.borderColor,
    paddingHorizontal: 18,
    backgroundColor: '#F9F9F9',
  },
});
