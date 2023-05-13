/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {NotoStar} from '../../assets/svgicons';
import TextButton from '../TextButton';

const DoctorsCard1 = ({item, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={item.image} style={styles.imageContainer} />
      <View style={styles.innerContainer}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{item.name}</Text>
            {/* RATING */}
            <TextButtonwithIcon
              leftIcon={<NotoStar width={15} height={15} />}
              label={'5.6'}
              labelStyle={{marginLeft: 3}}
            />
          </View>
          <Text style={styles.text}>{item.speciality}</Text>
        </View>
        <View style={styles.footer}>
          {/* EXPERIENCE */}
          <Text style={styles.experinceText}>5+ Year Exp.</Text>
          {/* BOOK_BUTTON */}
          <TextButton
            disabled
            label={'Book '}
            containerStyle={styles.bookButton}
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorsCard1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 9,
    flexDirection: 'row',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
    color: '#454545',
    marginTop: 3,
  },
  innerContainer: {
    flex: 1,
    marginLeft: 10,
    marginVertical: 6,
    justifyContent: 'space-between',
  },
  bookButton: {
    height: 32,
    backgroundColor: 'red',
    width: 80,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  experinceText: {
    fontSize: 10,
    color: '#454545',
    fontWeight: '500',
  },
});
