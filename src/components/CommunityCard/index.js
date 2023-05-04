import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';

const CommunityCard = ({containerStyle, title, subTitle, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Text style={styles.joinText}>Join</Text>
    </TouchableOpacity>
  );
};

export default CommunityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 11,
    marginHorizontal: 1.5,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.black,
  },
  subTitle: {
    fontSize: 10,
    color: '#606060',
    marginTop: 4,
  },
  joinText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.red,
  },
});
