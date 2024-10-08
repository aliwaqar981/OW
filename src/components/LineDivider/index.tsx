import {View, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';

interface LineDividerProps {
  lineStyle?: ViewStyle;
}

const LineDivider: React.FC<LineDividerProps> = ({lineStyle}) => {
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
