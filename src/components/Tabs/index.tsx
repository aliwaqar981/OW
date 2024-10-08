import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS} from '../../themes';

interface TabsProps {
  ActiveTabColor: string;
  label: string;
  onPress: () => void;
  labelColor?: string;
}

const Tabs: React.FC<TabsProps> = ({
  ActiveTabColor,
  label,
  onPress,
  labelColor,
}) => {
  return (
    <TouchableOpacity style={{width: '33.33%'}} onPress={onPress}>
      <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
      <View style={{height: 3, backgroundColor: ActiveTabColor}} />
    </TouchableOpacity>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 11,
    fontFamily: FONTS.Nunito_Regular,
  },
});
