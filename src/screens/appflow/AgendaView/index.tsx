import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Agenda} from 'react-native-calendars';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'AgendaView'>;

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const AgendaView: React.FC<Props> = ({navigation}) => {
  const [selected, setSelected] = React.useState('');

  const [items, setItems] = React.useState({});

  const loadItems = day => {
    setTimeout(() => {
      for (let i = -5; i < 20; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime,
              index: j,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 200);
  };

  const renderItem = item => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('BookingList')}>
          <View>
            <Text style={styles.name}>Session with Dr. Walters</Text>
            <Text style={styles.speciality}>Therapist</Text>
            <Text style={styles.time}>08:00AM - 09:30AM</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} />
      {/* <CalendarStrip
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
      /> */}
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        // selected={'2022-07-07'}
        refreshControl={null}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AgendaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    marginRight: 20,
    marginTop: 25,
    backgroundColor: '#EB4E1F25',
  },
  name: {
    fontSize: 14,
    fontFamily: FONTS.Nunito_Bold,
    color: COLORS.black,
  },
  speciality: {
    fontSize: 11,
    color: '#818E9C',
    fontFamily: FONTS.Nunito_Light,
    paddingTop: 2,
  },
  time: {
    fontSize: 11,
    color: '#818E9C',
    fontFamily: FONTS.Nunito_Regular,
    paddingTop: 18,
  },
  line: {
    flex: 1,
    backgroundColor: '#EB4E1F20',
    marginTop: 25,
    height: 1,
  },
});
