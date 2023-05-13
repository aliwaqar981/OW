/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SubscriptionPackage, TextButton} from '../../../components';
import {COLORS, FONTS} from '../../../themes';
import {CrownCircle, GlowingStar} from '../../../assets/svgicons';

const Subscription = () => {
  return (
    <View style={styles.container}>
      {/*HEADER */}
      <View style={styles.header}>
        <View style={styles.crownCircle}>
          <CrownCircle />
        </View>
        <View style={styles.innerContainer}>
          <View style={{marginLeft: 3}}>
            <Text style={styles.subscriptionText}>Current Subscription</Text>
            <Text style={styles.priemium}>Premium</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            {/* PRICE */}
            <Text style={styles.price}>$2400</Text>
            {/* VALID_MONTH */}
            <Text style={styles.validMonthText}>Valid for 12 month</Text>
          </View>
        </View>
      </View>
      {/* POINTS */}
      <View style={{marginTop: 40}}>
        {/* SUBSCRIPTION_PACKAGE_LISTS */}
        <SubscriptionPackage label={'Access to complete Video Library'} />
        <SubscriptionPackage
          label={'Tailored Exercises'}
          containerStyle={{marginTop: 12}}
        />
        <SubscriptionPackage
          label={'Treatment Plans'}
          containerStyle={{marginTop: 12}}
        />
        <SubscriptionPackage
          label={'Real-time Consultation'}
          containerStyle={{marginTop: 12}}
        />
      </View>
      {/*LEFT_TIME_&_UPGRADE_SUBSCRIPTION_CONTAINER */}
      <View style={styles.leftTimeAndButtonContainer}>
        {/* LEFT_TIME */}
        <Text style={styles.leftTimeText}>*6 Month, 22 Days Left</Text>
        {/* UPGRADE_BUTTON */}
        <TextButton
          label={'Upgrade'}
          labelStyle={{fontSize: 8}}
          containerStyle={styles.upgradeButton}
        />
      </View>
      {/* FOOTER */}
      <View style={styles.footer}>
        {/* TITLE */}
        <Text style={styles.title}>Want to cancel Subscription?</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur elit. The amet facilisi lorem
          mollis. Lorem cras et id tristique quisque.
        </Text>
        {/* CANCLE_BUTTON */}
        <TextButton
          label={'Cancel'}
          labelStyle={styles.cancleButtonlabel}
          containerStyle={styles.cancleButton}
        />
      </View>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  subscriptionText: {
    fontSize: 11,
    color: '#616161',
    marginBottom: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  priemium: {
    fontSize: 16,
    color: '#222222',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  validMonthText: {
    fontSize: 10,
    color: COLORS.black,
    marginBottom: 3,
    fontFamily: FONTS.Nunito_Medium,
  },
  price: {
    fontSize: 20,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  checkIconContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#1C4A5A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20 / 2,
    marginRight: 8,
  },
  pointLabel: {
    fontSize: 11,
    color: COLORS.black,
    flex: 1,
    marginLeft: 12,
  },
  upgradeButton: {
    height: 30,
    width: 80,
    backgroundColor: COLORS.primary,
    borderRadius: 28 / 2,
  },
  leftTimeAndButtonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftTimeText: {
    fontSize: 11,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Regular,
  },
  title: {
    fontSize: 14,
    color: COLORS.black,
    marginTop: 43,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  paragraph: {
    fontSize: 11,
    color: COLORS.black,
    marginTop: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  cancleButton: {
    height: 34,
    width: 91,
    backgroundColor: '#FFEFEF',
    marginTop: 20,
    borderRadius: 34 / 2,
  },
  cancleButtonlabel: {
    fontSize: 11,
    color: COLORS.red,
  },
  modalContainer: {
    paddingHorizontal: 25,
    paddingTop: 38,
    paddingBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    alignItems: 'center',
  },
  label: {
    fontSize: 10,
    color: COLORS.white,
  },
  crownCircle: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginRight: 8,
  },
});
