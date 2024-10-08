import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Profile} from '../../../assets/images';
import {ButtonwithIcon, Review, TextButton} from '../../../components';
import {Call1, Message1, VideoCall} from '../../../assets/svgicons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfessionalStackParamList} from '../../../navigation/ProfessionalStack';
type Props = NativeStackScreenProps<
  ProfessionalStackParamList,
  'ProfessionalBookingDetails'
>;

const ProfessionalBookingDetails: React.FC<Props> = ({navigation, route}) => {
  const {params} = route.params;

  return (
    <View style={styles.container}>
      {/* APPOINTED_CARD */}
      <View style={styles.card}>
        <Text style={styles.text}>Appointment:</Text>
        <Text style={[styles.title, {marginTop: 14}]}>
          Physical Therapy Evaluation
        </Text>
        <Text style={[styles.text, {marginTop: 8}]}>1 hour @ $75.00</Text>
      </View>
      {/* DOCTOR */}
      <View style={[styles.card, {marginTop: 16}]}>
        <Text style={[styles.text, {marginBottom: 14}]}>Doctor:</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Profile}
            style={{width: 32, height: 32, borderRadius: 32 / 2}}
          />
          <Text style={[styles.title, {marginLeft: 7, flex: 1}]}>
            Dr. Walters
          </Text>
          {/* MESSAGE_BUTTON */}
          <ButtonwithIcon
            icon={<Message1 />}
            onPress={() => navigation.navigate('ChatDetails')}
          />
        </View>
      </View>
      {/* TIME */}
      <View style={[styles.card, {marginTop: 16}]}>
        <Text style={styles.text}>Date & Time:</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.title}>Feb 3, Sunday</Text>
          <View style={styles.dot} />
          <Text style={styles.title}>12:00 PM</Text>
        </View>
      </View>
      {/* MODE */}
      <View style={[styles.card, {marginTop: 16}]}>
        <Text style={styles.text}>Mode:</Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          {/* AUDIO_CALL */}
          <ButtonwithIcon icon={<Call1 />} />
          {/* VIDEO_CALL */}
          <ButtonwithIcon
            icon={<VideoCall />}
            containerStyle={{marginLeft: 12}}
          />
        </View>
      </View>
      {params == 'Past Bookings' && (
        <View>
          {/* REVIEWS */}
          <Review />
        </View>
      )}

      {/* RATING */}
      {params == 'Requested Bookings' && (
        <View>
          <TextButton
            label={'Accept'}
            containerStyle={styles.startSessionButton}
            onPress={() => navigation.setParams({params: 'Active Bookings'})}
          />
          <TextButton
            label={'Reject'}
            labelStyle={{color: COLORS.red}}
            containerStyle={[
              styles.startSessionButton,
              {backgroundColor: COLORS.white, borderWidth: 1, marginTop: 12},
            ]}
            onPress={() => navigation.goBack()}
          />
          {/* PARAGRAPH */}
          <Text style={styles.paragraph}>
            You need to accept or reject the booking. Patient will be notified
            about it.
          </Text>
        </View>
      )}
      {params == 'Active Bookings' && (
        <View style={styles.footer}>
          <TextButton
            label={'Start Session'}
            containerStyle={styles.startSessionButton}
            // onPress={() => navigation.navigate('Session')}
          />
        </View>
      )}
    </View>
  );
};

export default ProfessionalBookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FBFBFB',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 11,
    color: '#263238',
    fontFamily: FONTS.Nunito_Regular,
  },
  title: {
    fontSize: 15,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 13,
  },
  scheduleText: {
    fontSize: 14,
    color: '#EB4E1F',
    marginTop: 10,
    fontFamily: FONTS.Nunito_Bold,
  },
  startSessionButton: {
    height: 48,
    backgroundColor: COLORS.red,
    marginTop: 28,
    borderRadius: 8,
    borderColor: COLORS.red,
  },
  cancleButton: {
    width: '25%',
    height: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  cancelButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paragraph: {
    fontSize: 12,
    color: '#263238',
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: FONTS.Nunito_Regular,
  },
});
