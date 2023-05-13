/* eslint-disable react-native/no-inline-styles */
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import {COLORS} from '../../../themes';
import {routes} from '../../../constants';
import {Agenda} from 'react-native-calendars';

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const AgendaView = ({navigation}) => {
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
    console.log('index-------', item);
    return (
      <TouchableOpacity style={styles.item}>
        <View>
          <Text>Session with Dr. Walters</Text>
          <Text>Session with Dr. Walters</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
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
      <Button
        title="Session with Dr. Walters"
        onPress={() => navigation.navigate(routes.BOOKINGLIST)}
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
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    backgroundColor: '#EB4E1F15',
  },
});
