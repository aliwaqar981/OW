import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../../themes';
import TextButton from '../TextButton';
import {afternoon, evening, morning} from '../../constants';
import CalendarStrip from 'react-native-calendar-strip';

// Define the structure of the time slots
interface TimeSlot {
  id: number;
  time: string;
  type: string;
}

// Define props type for AppointmentSchedule
interface AppointmentScheduleProps {
  onPress: () => void; // Function to handle button press
}

const AppointmentSchedule: React.FC<AppointmentScheduleProps> = ({onPress}) => {
  const [selectedDayTime, setSelectedDayTime] = useState('morning');
  const [currentTime, setCurrentTime] = useState<TimeSlot[]>([]); // Specify the type
  const [chooseHours, setChooseHours] = useState<number | undefined>();

  useEffect(() => {
    if (selectedDayTime === 'morning') {
      setCurrentTime(morning);
    } else if (selectedDayTime === 'afternoon') {
      setCurrentTime(afternoon);
    } else {
      setCurrentTime(evening);
    }
  }, [selectedDayTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.slot}>Schedule</Text>
      <CalendarStrip
        scrollable
        style={{
          paddingBottom: 20,
          marginTop: 10,
        }}
        calendarHeaderStyle={{
          paddingBottom: 20,
          fontSize: 12,
          fontFamily: FONTS.Nunito_Regular,
          color: '#9E9E9E',
        }}
        dateContainerStyle={{height: 60, backgroundColor: 'red'}}
        onDateSelected={date => console.log(date)}
        showMonth={true}
        maxDayComponentSize={80}
        minDayComponentSize={65}
        dayComponentHeight={76}
        dateNumberStyle={styles.dateNumberText}
        dateNameStyle={styles.dateNameText}
        highlightDateNumberStyle={styles.highlightDateNumberText}
        highlightDateNameStyle={styles.highlightDateNameText}
        highlightDateContainerStyle={{backgroundColor: COLORS.primary}}
        leftSelector={[]}
        rightSelector={[]}
        dayContainerStyle={styles.dayContainer}
      />
      <Text style={styles.slot}>Slot</Text>

      {/* CHOOSE_TIME */}
      <View style={styles.buttonContainer}>
        <TextButton
          label={'Morning'}
          labelStyle={
            [
              styles.label,
              {color: selectedDayTime === 'morning' ? COLORS.white : '#9E9E9E'},
            ] as TextStyle
          }
          containerStyle={
            [
              styles.button,
              {
                backgroundColor:
                  selectedDayTime === 'morning' ? COLORS.red : '#F5F6F7',
              },
            ] as ViewStyle
          }
          onPress={() => setSelectedDayTime('morning')}
        />
        <TextButton
          label={'Afternoon'}
          labelStyle={
            [
              styles.label,
              {
                color:
                  selectedDayTime === 'afternoon' ? COLORS.white : '#9E9E9E',
              },
            ] as TextStyle
          }
          containerStyle={
            [
              styles.button,
              {
                backgroundColor:
                  selectedDayTime === 'afternoon' ? COLORS.red : '#F5F6F7',
              },
            ] as ViewStyle
          }
          onPress={() => setSelectedDayTime('afternoon')}
        />
        <TextButton
          label={'Evening'}
          labelStyle={
            [
              styles.label,
              {color: selectedDayTime === 'evening' ? COLORS.white : '#9E9E9E'},
            ] as TextStyle
          }
          containerStyle={
            [
              styles.button,
              {
                backgroundColor:
                  selectedDayTime === 'evening' ? COLORS.red : '#F5F6F7',
              },
            ] as ViewStyle
          }
          onPress={() => setSelectedDayTime('evening')}
        />
      </View>
      {/* AVAILABLE_TIME */}
      <Text style={[styles.slot, {paddingTop: 30}]}>Available Time</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexDirection: 'row'}}>
        {currentTime.map(item => {
          return (
            <TouchableOpacity
              onPress={() => setChooseHours(item.id)}
              key={item.id}
              style={[
                styles.timeContainer,
                {
                  backgroundColor:
                    item.id === chooseHours ? COLORS.red : '#F5F6F7',
                },
              ]}>
              <Text
                style={[
                  styles.text,
                  {color: item.id === chooseHours ? COLORS.white : '#9E9E9E'},
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

export default AppointmentSchedule;

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
    fontFamily: FONTS.Nunito_SemiBold,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  dateNumberText: {
    fontSize: 12,
    color: '#9E9E9E',
    fontFamily: FONTS.Nunito_Medium,
  },
  dateNameText: {
    color: '#9E9E9E',
    fontSize: 12,
    fontFamily: FONTS.Nunito_Medium,
  },
  highlightDateNumberText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: FONTS.Nunito_Medium,
  },
  highlightDateNameText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: FONTS.Nunito_Medium,
  },
  dayContainer: {
    backgroundColor: '#C8D2D435',
    borderRadius: 10,
    width: 50,
    height: 76,
  },
});
