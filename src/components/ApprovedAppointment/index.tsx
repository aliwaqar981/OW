import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';
import TextButton from '../TextButton';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {Call1, NotoStar, VideoCall} from '../../assets/svgicons';
import ButtonwithIcon from '../ButtonwithIcon';
interface ApprovedAppointmentProps {
  showRating: boolean;
  containerStyle?: ViewStyle; // containerStyle is optional
}

interface ApprovedAppointmentProps {
  showRating: boolean;
  containerStyle?: ViewStyle; // containerStyle is optional
}

const ApprovedAppointment: React.FC<ApprovedAppointmentProps> = ({
  showRating,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
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
      <Text style={styles.dateText}>Date & Time:</Text>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>Feb 3, Sunday</Text>
          {/* DOT */}
          <View style={styles.dot} />
          <Text style={styles.text}>Date & Time:</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row'}}>
          {/* AUDIO_CALL */}
          <ButtonwithIcon icon={<Call1 />} />
          {/* VIDEO_CALL */}
          <ButtonwithIcon
            icon={<VideoCall />}
            containerStyle={{marginLeft: 12}}
          />
        </View>
        <TextButton
          label={'View'}
          labelStyle={{color: COLORS.red}}
          containerStyle={{width: 45}}
        />
      </View>
    </View>
  );
};

export default ApprovedAppointment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,

    elevation: 2.2,
    paddingVertical: 19,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  therapyText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  timeText: {
    fontSize: 12,
    color: '#404040',
    paddingTop: 5,
    fontFamily: FONTS.Nunito_Regular,
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
    fontFamily: FONTS.Nunito_Light,
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
  // detailText: {
  //   fontSize: 15,
  //   fontWeight: '500',
  //   color: COLORS.red,
  //   alignSelf: 'center',
  //   paddingTop: 17,
  // },
  footer: {
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
