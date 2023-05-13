/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../themes';
import TextButton from '../TextButton';

const ChooseAppointment = ({onContinuePress}) => {
  const [selectedCard, setSelectedCard] = useState('');
  return (
    <View style={styles.container}>
      {/* LINE */}
      <View style={styles.line} />
      {/* CHOOSE_APPOINTMENT */}
      <Text style={styles.chooseText}>Choose Appointment</Text>
      {/* APPOINTMENT_LISTS */}
      <TouchableOpacity
        style={[
          styles.innerContainer,
          {borderWidth: selectedCard == 'physical' ? 1 : 0},
        ]}
        onPress={() => setSelectedCard('physical')}>
        {/* SPECIALITY */}
        <Text style={styles.speciality}>Physical Therapy Evaluation</Text>
        {/* TIME */}
        <Text style={styles.timeText}>1 hour @ $75.00</Text>
      </TouchableOpacity>
      {/* APPOINTMENT_LISTS */}
      <TouchableOpacity
        style={[
          styles.innerContainer,
          {marginTop: 10, borderWidth: selectedCard == 'bio' ? 1 : 0},
        ]}
        onPress={() => setSelectedCard('bio')}>
        {/* SPECIALITY */}
        <Text style={styles.speciality}>Bio Mechanical</Text>
        {/* TIME */}
        <Text style={styles.timeText}>1 hour @ $75.00</Text>
      </TouchableOpacity>
      {/* APPOINTMENT_LISTS */}
      <TouchableOpacity
        style={[
          styles.innerContainer,
          {marginTop: 10, borderWidth: selectedCard == 'movement' ? 1 : 0},
        ]}
        onPress={() => setSelectedCard('movement')}>
        {/* SPECIALITY */}
        <Text style={styles.speciality}>Movement analysis</Text>
        {/* TIME */}
        <Text style={styles.timeText}>1 hour @ $75.00</Text>
      </TouchableOpacity>
      <TextButton
        label={'Continue'}
        disabled={!selectedCard}
        containerStyle={[
          styles.continueButton,
          {backgroundColor: selectedCard ? COLORS.red : '#EB4E1F80'},
        ]}
        onPress={onContinuePress}
      />
    </View>
  );
};

export default ChooseAppointment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 30,
    paddingHorizontal: 16,
  },
  line: {
    width: 100,
    height: 12,
    backgroundColor: '#00000010',
    alignSelf: 'center',
    borderRadius: 12 / 2,
  },
  chooseText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    paddingTop: 25,
    marginBottom: 18,
  },
  innerContainer: {
    backgroundColor: '#00000007',
    paddingVertical: 20,
    paddingLeft: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.red,
  },
  speciality: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  timeText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#404040',
  },
  continueButton: {
    height: 50,
    borderRadius: 8,
    marginBottom: 24,
    marginTop: 40,
  },
});
