/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../theme';
import {TextInput} from 'react-native';
import {Magnify} from '../../assets/svgIcons';

const SearchBar = ({
  containerStyle,
  label,
  onFocus,
  icon,
  placeholder,
  showFilter,
  onChangeText,
  value,
  onSubmitEditing,
  placeholderTextColor,
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
