/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {COLORS} from '../../../themes';
import {routes} from '../../../constants';

const Calendar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable
        style={{
          height: 200,
          paddingBottom: 10,
          //   backgroundColor: 'red',
        }}
        calendarColor={'white'}
        calendarHeaderStyle={{color: COLORS.red}}
        dateNumberStyle={{color: '#616161'}}
        dateNameStyle={{color: '#616161'}}
        iconContainer={{flex: 0.1}}
        dateContainerStyle={{height: 60, backgroundColor: 'red'}}
        onDateSelected={date => console.log(date)}
        showMonth={true}
        maxDayComponentSize={80}
        minDayComponentSize={65}
        dayComponentHeight={86}
        highlightDateContainerStyle={{backgroundColor: COLORS.primary}}
        highlightDateNumberStyle={{color: COLORS.white}}
        highlightDateNameStyle={{color: COLORS.white}}
        calendarHeaderContainerStyle={{
          position: 'absolute',
          top: 30,
          left: 40,
        }}
        iconLeftStyle={{}}
        iconRightStyle={{}}
      />
      <Button
        title="Session with Dr. Walters"
        onPress={() => navigation.navigate(routes.BOOKINGLIST)}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
