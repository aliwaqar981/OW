/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';

const ChatHome = ({onPress, item}) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <Image source={item.image} style={{width: 50, height: 50}} />
      <View style={{flex: 1, marginLeft: 7}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.message}>{item.time}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    height: 65,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  name: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  message: {
    fontSize: 12,
    color: '#8A8A8A',
    fontFamily: FONTS.Nunito_Regular,
  },
});
