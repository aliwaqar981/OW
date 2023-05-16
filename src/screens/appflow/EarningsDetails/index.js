/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Chart, TextButton, TextButtonwithIcon} from '../../../components';
import {DropDown1} from '../../../assets/svgicons';

const EarningsDetails = () => {
  return (
    <View style={styles.container}>
      {/* WITH_DRAW_REQUEST */}
      <View style={styles.withDrawContainer}>
        {/* PRICE */}
        <Text style={styles.priceText}>$225.00</Text>
        <Text style={styles.availableText}>Available for withdrawals</Text>
        {/* REQUEST_WITH_DRAW_BUTTON */}
        <TextButton
          label={'Request Withdraw'}
          containerStyle={styles.requestWithDrawButton}
        />
      </View>
      {/* LAST_SIX_MONTH_REPORT */}
      <View style={styles.lastSixMonth}>
        <View>
          <Text style={styles.price1}>$325.00</Text>
          <Text style={styles.monthText}>This Month</Text>
        </View>
        <TextButtonwithIcon
          label={'Last 6 Months'}
          labelStyle={{fontSize: 12, color: COLORS.red, marginRight: 5}}
          rightIcon={<DropDown1 />}
        />
      </View>
      {/* CHART */}
      <View style={styles.line} />
      <Chart />
      {/* TITLE */}
      <Text style={styles.title}>Analytics</Text>
      {/* ANALYTICS */}
      <View style={styles.analyticsCard}>
        <Text style={styles.subTitle}>Earnings in January</Text>
        <Text style={styles.price2}>$58.00</Text>
        <View style={styles.line} />
        <Text style={[styles.subTitle, {paddingTop: 20}]}>
          Earnings in January
        </Text>
        <Text style={styles.price2}>
          4 <Text style={{color: '#838383'}}>($340)</Text>
        </Text>
        <View style={styles.line} />
        <Text style={[styles.subTitle, {paddingTop: 20}]}>
          Available for withdrawal
        </Text>
        <Text style={[styles.price2, {color: COLORS.red}]}>$225</Text>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default EarningsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  withDrawContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1.3,
    borderColor: '#F4F4F4',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 18,
    paddingHorizontal: 18,
    marginHorizontal: 20,
  },
  priceText: {
    fontSize: 24,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Bold,
  },
  availableText: {
    fontSize: 12,
    color: '#626363',
    paddingTop: 5,
    fontFamily: FONTS.Nunito_Regular,
  },
  requestWithDrawButton: {
    height: 50,
    backgroundColor: COLORS.red,
    width: '100%',
    borderRadius: 10,
    marginTop: 30,
  },
  lastSixMonth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 35,
    alignItems: 'center',
  },
  price1: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  monthText: {
    fontSize: 12,
    color: '#D5D6D7',
    fontFamily: FONTS.Nunito_Medium,
  },
  line: {
    height: 1,
    backgroundColor: '#EAEBEB',
    marginVertical: 8,
  },
  analyticsCard: {
    padding: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.Nunito_Bold,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subTitle: {
    fontSize: 12,
    color: '#292D32',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  price2: {
    fontSize: 16,
    color: '#292D32',
    fontFamily: FONTS.Nunito_SemiBold,
    paddingTop: 5,
  },
});
