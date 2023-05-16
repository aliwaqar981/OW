import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonwithIcon = ({onPress, icon, containerStyle, hitSlop}) => {
  return (
    <TouchableOpacity
      hitSlop={hitSlop ? hitSlop : {left: 10, right: 10, bottom: 10, top: 10}}
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
