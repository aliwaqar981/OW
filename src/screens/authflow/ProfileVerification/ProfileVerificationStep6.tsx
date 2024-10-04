import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {TextButton} from '../../../components';
import {routes} from '../../../constants';

const ProfileVerificationStep6 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          {/* HEADING */}
          <Text style={styles.heading}>Complete My Profile</Text>
          {/* SKIP */}
          <TextButton
            label={'SKIP'}
            labelStyle={{color: COLORS.black, fontFamily: FONTS.Nunito_Regular}}
            containerStyle={styles.skip}
          />
        </View>
        {/* COUNTER */}
        <Text style={[styles.heading, {marginTop: 3}]}>6/7</Text>
        {/* TITLE */}
        <Text style={styles.title}>Add services you offer</Text>
        {/* DISCRIPTION */}
        <Text style={styles.discrption}>
          Let patient select what exactly they needs
        </Text>
        {/* SERVICESDETAILS */}
        <View style={styles.serviceDetails}>
          <Text style={styles.serviceLabel}>Physical Therapy Evaluation</Text>
          <Text style={styles.serviceTime}>1 hour @ $75.00</Text>
        </View>
      </View>
      <View style={styles.footer}>
        {/* ADD_MORE */}
        <TextButton
          label={'Add More +'}
          labelStyle={{color: COLORS.red}}
          containerStyle={styles.addmore}
        />
        {/* NEXT_BUTTON */}
        <TextButton
          label={'Next'}
          containerStyle={styles.nextButton}
          onPress={() => navigation.navigate(routes.PROFILEVERIFICATIONSTEP7)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileVerificationStep6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Bold,
  },
  skip: {
    backgroundColor: undefined,
    width: 40,
  },
  title: {
    fontSize: 24,
    color: '#030F1C',
    marginTop: 22,
    fontFamily: FONTS.Nunito_Bold,
  },
  discrption: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  serviceDetails: {
    backgroundColor: '#FBFBFB',
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginTop: 32,
    borderRadius: 12,
  },
  serviceLabel: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  serviceTime: {
    fontSize: 12,
    color: '#404040',
    marginTop: 8,
    fontFamily: FONTS.Nunito_Regular,
  },
  addmore: {
    backgroundColor: undefined,
    width: 90,
    alignSelf: 'flex-end',
  },
  nextButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: COLORS.red,
    width: '100%',
    marginTop: 40,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    paddingTop: 34,
    justifyContent: 'space-between',
    paddingBottom: 45,
  },
});
