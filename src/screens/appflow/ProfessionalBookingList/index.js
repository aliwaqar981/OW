/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable eqeqeq */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../themes';
import {BookingCard, Tabs} from '../../../components';
import {routes} from '../../../constants';

const ProfessionalBookingList = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('Requested');

  const RenderRequestedBookings = () => {
    return (
      <View style={{paddingTop: 24}}>
        <BookingCard
          startSession={true}
          buttonTitle="Accept"
          buttonColor={'#EB4E1F90'}
          onStartSessionPress={() =>
            navigation.navigate(routes.PROFESSIONALBOOKINGDETAILS, {
              params: 'Requested Bookings',
            })
          }
        />
      </View>
    );
  };

  const RenderActiveBookings = () => {
    return (
      <View style={{paddingTop: 24}}>
        <BookingCard
          startSession={true}
          buttonTitle="Start a Session"
          buttonColor={'#EB4E1F'}
          onStartSessionPress={() =>
            navigation.navigate(routes.PROFESSIONALBOOKINGDETAILS, {
              params: 'Active Bookings',
            })
          }
        />
      </View>
    );
  };

  const RenderPastBookings = () => {
    return (
      <View style={{paddingTop: 24}}>
        <BookingCard
          startSession={false}
          // buttonTitle="Accept"
          buttonColor={'#EB4E1F'}
          showRating={true}
          onPress={() =>
            navigation.navigate(routes.PROFESSIONALBOOKINGDETAILS, {
              params: 'Past Bookings',
            })
          }
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* TABS */}
      <View style={styles.headerContainer}>
        {/* TABS */}
        <Tabs
          label={'Requested'}
          ActiveTabColor={selectedTab == 'Requested' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'Requested' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('Requested')}
        />
        <Tabs
          label={'Active'}
          ActiveTabColor={selectedTab == 'Active' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'Active' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('Active')}
        />
        <Tabs
          label={'Past'}
          ActiveTabColor={selectedTab == 'Past' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'Past' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('Past')}
        />
      </View>
      <View style={styles.innerContainer}>
        {selectedTab == 'Active' ? (
          <RenderActiveBookings />
        ) : selectedTab == 'Requested' ? (
          <RenderRequestedBookings />
        ) : (
          <RenderPastBookings />
        )}
      </View>
    </View>
  );
};

export default ProfessionalBookingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
});
