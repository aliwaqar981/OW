/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable eqeqeq */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../themes';
import {Appointment, EmptyState, Tabs} from '../../../components';
import {routes} from '../../../constants';
import {Calendar} from '../../../assets/images';

const BookingList = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('Active');
  const [isEmptyState, setIsEmptyState] = useState(false);

  setTimeout(() => {
    setIsEmptyState(true);
  }, 2000);

  const RenderActiveBookings = () => {
    return (
      <View style={styles.activeBookings}>
        {isEmptyState == true ? (
          <Appointment
            startSession={true}
            onPress={() =>
              navigation.navigate(routes.BOOKINGDETAILS, {
                params: 'Active Bookings',
              })
            }
            onStartSessionPress={() => navigation.navigate(routes.SESSION)}
          />
        ) : (
          <EmptyState
            image={Calendar}
            title={'You have no appointments scheduled'}
            paragraph={
              'Book on appointment with a therapist to see this page filled with content and your heart filled with delight.'
            }
          />
        )}
      </View>
    );
  };
  const RenderRequestedBookings = () => {
    return (
      <View style={styles.activeBookings}>
        <Appointment
          onPress={() =>
            navigation.navigate(routes.BOOKINGDETAILS, {
              params: 'Requested Bookings',
            })
          }
        />
      </View>
    );
  };
  const RenderPastBookings = () => {
    return (
      <View style={styles.activeBookings}>
        <Appointment
          showRating={true}
          onPress={() =>
            navigation.navigate(routes.BOOKINGDETAILS, {
              params: 'Past Bookings',
            })
          }
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} />
      {/* HEADER */}
      <View style={styles.headerContainer}>
        {/* TABS */}
        <Tabs
          label={'Active'}
          ActiveTabColor={selectedTab == 'Active' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'Active' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('Active')}
        />
        <Tabs
          label={'Requested'}
          ActiveTabColor={selectedTab == 'Requested' ? COLORS.red : '#515151'}
          labelColor={selectedTab == 'Requested' ? COLORS.red : '#515151'}
          onPress={() => setSelectedTab('Requested')}
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

export default BookingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  activeBookings: {
    marginTop: 23,
    paddingVertical: 19,
  },
});
