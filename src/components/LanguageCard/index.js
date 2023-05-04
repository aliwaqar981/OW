import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LanguageCard = ({flag, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {flag}
      <Text style={styles.language}>LanguageCard</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default LanguageCard;

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  language: {
    fontSize: 14,
    fontWeight: '400',
    color: '#292D32',
    marginLeft: 11,
    flex: 1,
  },
});
