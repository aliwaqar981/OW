/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NotificationCard} from '../../../components';
import {Notifications_List} from '../../../constants';
import {COLORS} from '../../../themes';

const Notification = () => {
  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>Today</Text>
      {Notifications_List.map(item => {
        return (
          <NotificationCard
            key={item.id}
            label={'Only 1 day to go. Get ready for the adventure.'}
            time={'09/02/23'}
            containerStyle={{marginBottom: 14}}
            color={item.color}
            icon={item.icon}
          />
        );
      })}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 12,
    lineHeight: 14,
    color: '#D1D1D1',
    marginTop: 28,
    marginLeft: 16,
    marginBottom: 22,
  },
});
