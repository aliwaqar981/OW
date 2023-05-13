/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';
import TextButton from '../TextButton';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {NotoStar} from '../../assets/svgicons';

const BookingCard = ({
  startSession,
  onStartSessionPress,
  buttonTitle,
  buttonColor,
  showRating,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <View>
          {/* THERAPY_TEXT  */}
          <Text style={styles.therapyText}>Physical Therapy Evaluation</Text>
          {/* TIME */}
          <Text style={styles.timeText}>1 hour @ $75.00</Text>
        </View>
        {showRating ? (
          <TextButtonwithIcon
            leftIcon={<NotoStar width={16} height={16} />}
            label={'4.5'}
            labelStyle={{fontSize: 14, color: '#4C4C4C', marginLeft: 5}}
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
        </View>
      </View>
      {startSession ? (
        <View>
          <TextButton
            label={buttonTitle}
            containerStyle={[
              styles.startSessionButton,
              {backgroundColor: buttonColor},
            ]}
            labelStyle={{color: COLORS.white}}
            onPress={onStartSessionPress}
          />
          <Text style={styles.detailText}>View Additional Details</Text>
        </View>
      ) : null}
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,

    elevation: 4,
    paddingVertical: 19,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  therapyText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
  },
  timeText: {
    fontSize: 12,
    color: '#404040',
    paddingTop: 5,
  },
  horizontalLine: {
    marginVertical: 20,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: COLORS.black,
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: '#D9D9D9',
    borderRadius: 7 / 2,
    marginHorizontal: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#404040',
  },
  dateText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
    marginBottom: 4,
  },
  startSessionButton: {
    height: 48,
    backgroundColor: COLORS.red,
    marginTop: 28,
    borderRadius: 8,
  },
  detailText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.red,
    alignSelf: 'center',
    paddingTop: 17,
  },
});
