import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Profile} from '../../../assets/images';
import {ButtonwithIcon, Rating, Review, TextButton} from '../../../components';
import {Call1, Message1, VideoCall} from '../../../assets/svgicons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'BookingDetails'>;

const BookingDetails: React.FC<Props> = ({navigation, route}) => {
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
      {route.params.params == 'Past Bookings' && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* REVIEWS */}
          <View>
            <Rating />
            <Text style={[styles.text, {color: '#263238', marginTop: 32}]}>
              Want to Reschedule?
            </Text>
            <Text style={[styles.scheduleText]}>Schedule Her</Text>
          </View>
        </ScrollView>
      )}

      {/* RATING */}
      {route.params.params == 'Requested Bookings' && (
        <View>
          <Review />
          <Text style={[styles.text, {color: '#263238', marginTop: 32}]}>
            Want to Reschedule?
          </Text>
          <Text style={[styles.scheduleText]}>Schedule Her</Text>
        </View>
      )}
      {route.params.params == 'Active Bookings' && (
        <View style={styles.footer}>
          <TextButton
            label={'Start Session'}
            containerStyle={styles.startSessionButton}
            onPress={() => navigation.navigate('Session')}
          />
          <View style={styles.cancelButtonContainer}>
            <Text style={styles.text}>Something happened?</Text>
            <TextButton
              label={'Cancel?'}
              containerStyle={styles.cancleButton}
              labelStyle={{color: COLORS.red}}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default BookingDetails;

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
});
