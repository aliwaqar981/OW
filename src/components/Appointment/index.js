/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';
import TextButton from '../TextButton';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {NotoStar} from '../../assets/svgicons';

const Appointment = ({
  containerStyle,
  onStartSessionPress,
  onCancelPress,
  startSession,
  showRating,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* VERTICAL_LINES */}
          <View style={styles.lineStyles} />
          <View>
            {/* NAME */}
            <Text style={styles.name}>DR. Walters</Text>
            {/* DOC_TYPE */}
            <Text style={styles.docType}>Therapist</Text>
          </View>
        </View>
        {showRating ? (
          <TextButtonwithIcon
            leftIcon={<NotoStar width={16} height={16} />}
            label={'4.5'}
            labelStyle={{
              fontSize: 14,
              color: '#4C4C4C',
              marginLeft: 5,
              fontFamily: FONTS.Nunito_Regular,
            }}
            disabled
          />
        ) : null}
      </View>
      {/* HORIZONTAL_LINES */}
      <View style={styles.horizontalLine} />
      {/* DATE_&_TIME */}
      <View>
        <Text style={styles.dateText}>Date & Time:</Text>
        <View style={styles.innerContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>Feb 3, Sunday</Text>
            {/* DOT */}
            <View style={styles.dot} />
            <Text style={styles.text}>Date & Time:</Text>
          </View>
          <TextButton
            label={'Cancel?'}
            containerStyle={styles.cancleButton}
            labelStyle={{color: COLORS.red, fontFamily: FONTS.Nunito_Light}}
            onPress={onCancelPress}
          />
        </View>
      </View>
      {/* START_SESSIONS_BUTTON */}
      {startSession ? (
        <TextButton
          label={'Start Session'}
          containerStyle={styles.startSessionButton}
          labelStyle={{color: COLORS.white}}
          onPress={onStartSessionPress}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default Appointment;

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
    paddingVertical: 19,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineStyles: {
    height: 33,
    backgroundColor: COLORS.red,
    width: 12,
    marginRight: 5,
  },
  name: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  docType: {
    fontSize: 12,
    color: '#404040',
    fontFamily: FONTS.Nunito_Regular,
  },
  horizontalLine: {
    marginVertical: 20,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: COLORS.black,
  },
  dateText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
    fontFamily: FONTS.Nunito_Light,
  },
  text: {
    fontSize: 12,
    color: '#404040',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: '#D9D9D9',
    borderRadius: 7 / 2,
    marginHorizontal: 4,
  },
  cancleButton: {
    width: '25%',
    height: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  startSessionButton: {
    height: 48,
    backgroundColor: COLORS.red,
    marginTop: 28,
    borderRadius: 8,
  },
});
