/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Shoulder} from '../../assets/images';
import {COLORS} from '../../themes';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {Plus, Time, Video1} from '../../assets/svgicons';
import ButtonwithIcon from '../ButtonwithIcon';

const Program = ({item, containerStyle, onBadgePress}) => {
  return (
    <TouchableOpacity style={[styles.container, {...containerStyle}]}>
      {/* BACKGROUND_IMAGE */}
      <ImageBackground
        source={item.image}
        style={{width: '100%', height: 122, borderRadius: 8}}>
        {/* BADGE */}
        <TouchableOpacity style={styles.badge} onPress={onBadgePress}>
          <Text style={styles.badgelabel}>{item.bodyPart}</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={{paddingHorizontal: 13, paddingVertical: 14}}>
        {/* TITLE */}
        <Text style={styles.title}>{item.label}</Text>
        <View style={styles.innerContainer}>
          {/* TIME */}
          <TextButtonwithIcon
            label={'1h 30min'}
            labelStyle={{fontSize: 12, marginLeft: 5}}
            leftIcon={<Time />}
            disabled
          />
          {/* EXERCISES */}
          <TextButtonwithIcon
            label={'06 Exercises'}
            labelStyle={{fontSize: 12, marginLeft: 5}}
            leftIcon={<Video1 />}
            disabled
            containerStyle={{marginRight: 60}}
          />
          {/* ADD */}
          <ButtonwithIcon
            icon={<Plus />}
            containerStyle={styles.iconContainer}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Program;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    marginHorizontal: 3,
  },
  iconContainer: {
    width: 37,
    height: 37,
    backgroundColor: COLORS.red,
    borderRadius: 30 / 2,
  },
  badge: {
    alignSelf: 'flex-start',
    margin: 9,
    backgroundColor: COLORS.red,
    height: 26,
    borderRadius: 26 / 2,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgelabel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.white,
  },
  innerContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
});
