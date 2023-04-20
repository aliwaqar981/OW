/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

const LineDivider = ({lineStyle}) => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: COLORS.white,
        ...lineStyle,
      }}
    />
  );
};

export default LineDivider;
