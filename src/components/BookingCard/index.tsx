import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';
import TextButton from '../TextButton';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {NotoStar} from '../../assets/svgicons';

interface BookingCardProps {
  startSession?: boolean;
  onStartSessionPress?: () => void;
  buttonTitle?: string;
  buttonColor?: string;
  showRating?: boolean;
  onPress?: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  startSession,
  onStartSessionPress,
  buttonTitle,
  buttonColor,
  showRating,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View>
          <Text style={styles.therapyText}>Physical Therapy Evaluation</Text>
          <Text style={styles.timeText}>1 hour @ $75.00</Text>
        </View>
        {showRating ? (
          <TextButtonwithIcon
            leftIcon={<NotoStar width={16} height={16} />}
            label={'4.5'}
            labelStyle={styles.ratingLabel}
            disabled
          />
        ) : null}
      </View>

      <View style={styles.horizontalLine} />
      <View>
        <Text style={styles.dateText}>Date & Time:</Text>
        <View style={styles.innerContainer}>
          <View style={styles.dateRow}>
            <Text style={styles.text}>Feb 3, Sunday</Text>
            <View style={styles.dot} />
            <Text style={styles.text}>Date & Time:</Text>
          </View>
        </View>
      </View>
      {startSession ? (
        <View>
          <TextButton
            label={buttonTitle || ''}
            containerStyle={
              [
                styles.startSessionButton,
                {backgroundColor: buttonColor},
              ] as TextStyle
            }
            labelStyle={{color: COLORS.white}}
            onPress={onStartSessionPress}
          />
          <TouchableOpacity>
            <Text style={styles.detailText}>View Additional Details</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  therapyText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
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
    color: '#404040',
    fontFamily: FONTS.Nunito_Regular,
  },
  dateText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  startSessionButton: {
    height: 48,
    backgroundColor: COLORS.red,
    marginTop: 28,
    borderRadius: 8,
  },
  detailText: {
    fontSize: 15,
    color: COLORS.red,
    alignSelf: 'center',
    paddingTop: 17,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  ratingLabel: {
    fontSize: 14,
    color: '#4C4C4C',
    marginLeft: 5,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {},
});
