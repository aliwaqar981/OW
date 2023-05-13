/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../../themes';
import TextButton from '../TextButton';
import {afternoon, evening, morning} from '../../constants';

const AppointmentSchdule = ({onPress}) => {
  const [selectedDayTime, setSelectedDayTime] = useState('morning');
  const [currentTime, setCurrentTime] = useState(morning);
  const [chooseHours, setChooseHours] = useState();
  useEffect(() => {
    if (selectedDayTime == 'morning') {
      setCurrentTime(morning);
    } else if (selectedDayTime == 'afternoon') {
      setCurrentTime(afternoon);
    } else {
      setCurrentTime(evening);
    }
  }, [selectedDayTime]);
  return (
    <View style={styles.container}>
      <Text style={styles.slot}>Slot</Text>
      {/* CHOOSE_TIME */}
      <View style={styles.buttonContainer}>
        <TextButton
          label={'Morning'}
          labelStyle={[
            styles.label,
            {color: selectedDayTime == 'morning' ? COLORS.white : '#9E9E9E'},
          ]}
          containerStyle={[
            styles.button,
            {
              backgroundColor:
                selectedDayTime == 'morning' ? COLORS.red : '#F5F6F7',
            },
          ]}
          onPress={() => setSelectedDayTime('morning')}
        />
        <TextButton
          label={'Morning'}
          labelStyle={[
            styles.label,
            {color: selectedDayTime == 'afternoon' ? COLORS.white : '#9E9E9E'},
          ]}
          containerStyle={[
            styles.button,
            {
              backgroundColor:
                selectedDayTime == 'afternoon' ? COLORS.red : '#F5F6F7',
            },
          ]}
          onPress={() => setSelectedDayTime('afternoon')}
        />
        <TextButton
          label={'Morning'}
          labelStyle={[
            styles.label,
            {color: selectedDayTime == 'evening' ? COLORS.white : '#9E9E9E'},
          ]}
          containerStyle={[
            styles.button,
            {
              backgroundColor:
                selectedDayTime == 'evening' ? COLORS.red : '#F5F6F7',
            },
          ]}
          onPress={() => setSelectedDayTime('evening')}
        />
      </View>
      {/* AVAILABLE_TIME */}
      <Text style={[styles.slot, {paddingTop: 30}]}>Available Time</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyles={{flexDirection: 'row'}}>
        {currentTime.map(item => {
          return (
            <TouchableOpacity
              onPress={() => setChooseHours(item.id)}
              key={item.id}
              style={[
                styles.timeContainer,
                {
                  backgroundColor:
                    item.id == chooseHours ? COLORS.red : '#F5F6F7',
                },
              ]}>
              <Text
                style={[
                  styles.text,
                  {color: item.id == chooseHours ? COLORS.white : '#9E9E9E'},
                ]}>
                {item.time} {item.type}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/* CONFIRM_APPOINTMENT */}
      <TextButton
        label={'Confirm Appointment'}
        containerStyle={styles.appointButton}
        onPress={onPress}
      />
    </View>
  );
};

export default AppointmentSchdule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
    paddingBottom: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  slot: {
    fontSize: 20,
    color: COLORS.black,
  },
  label: {
    fontSize: 14,
    color: COLORS.white,
  },
  button: {
    width: '30%',
    backgroundColor: COLORS.red,
    paddingVertical: 13,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
    width: 72,
    height: 32,
    marginRight: 16,
    marginTop: 16,
    borderRadius: 5,
  },
  text: {
    fontSize: 12,
  },
  appointButton: {
    height: 50,
    borderRadius: 8,
    marginBottom: 40,
    marginTop: 70,
    backgroundColor: COLORS.red,
  },
});
