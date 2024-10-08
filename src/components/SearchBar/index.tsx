import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../theme';

interface SearchBarProps extends TextInputProps {
  containerStyle?: ViewStyle;
  icon?: React.ReactNode;
  showFilter?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  containerStyle,
  icon,
  placeholder,
  showFilter,
  onChangeText,
  value,
  onFocus,
  onSubmitEditing,
  placeholderTextColor,
  ...textInputProps
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      {icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={{
          fontSize: 12,
          flex: 1,
          marginLeft: 7,
        }}
        onFocus={onFocus}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmitEditing}
        {...textInputProps} // Spread additional TextInput props
      />
      {showFilter && (
        <Text
          style={{
            fontSize: 13,
            color: COLORS.primary,
            marginRight: 12,
            fontFamily: FONTS.Medium,
          }}>
          Filters
        </Text>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 10,
  },
});
