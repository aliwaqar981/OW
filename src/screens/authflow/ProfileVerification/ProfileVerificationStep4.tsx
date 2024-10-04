import {
  LayoutAnimation,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../../themes';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ChooseTime, TextButton, TextButtonwithIcon} from '../../../components';
import {WhiteCheck} from '../../../assets/svgicons';
import {routes, time} from '../../../constants';

const ProfileVerificationStep4 = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [showAdvanceSchedule, setShowAdvanceSchedule] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCollapsed(!isCollapsed);
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };
  console.log('selecteddate', typeof selectedDate);
  const RenderDatePicker = () => {
    return (
      <View>
        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* HEADING */}
        <Text style={styles.heading}>Complete My Profile</Text>
        {/* COUNTER */}
        <Text style={[styles.heading, {marginTop: 3}]}>4/7</Text>
        {/* TITLE */}
        <Text style={styles.title}>Update Schedule</Text>
        {/* DISCRIPTION */}
        <Text style={styles.discrption}>Manage your availability </Text>
        {/* SELECT_GENERAL */}
        <Text style={styles.generalText}>
          Select general availability to receive bookings
        </Text>
        {/* SELECT_DAY */}
        <Text style={[styles.text, {marginTop: 18}]}>Select Days</Text>
        {/* SELECT_ALL */}
        <Text style={[styles.text, {marginTop: 7}]}>All Days</Text>
        {/* AVAILABLE_TEXT */}
        <Text style={styles.availableText}>*available in advance</Text>
        {/* SELECT_TIME */}
        <Text style={styles.selectTimeText}>Select Time</Text>
        {/* CHOOSE_TIME */}
        <View style={{flexDirection: 'row', marginTop: 8}}>
          {/* FROM */}
          <TouchableOpacity style={styles.time} onPress={showDatePicker}>
            <Text>From</Text>
          </TouchableOpacity>
          {/* TO */}
          <TouchableOpacity
            style={[styles.time, {marginLeft: 20}]}
            onPress={showDatePicker}>
            <Text>To</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* BUTTON */}
      <TextButtonwithIcon
        label={'Advance Schedule'}
        labelStyle={{fontSize: 14, fontFamily: FONTS.Nunito_SemiBold}}
        leftIcon={<WhiteCheck />}
        leftIconContainer={[
          styles.icon,
          {backgroundColor: showAdvanceSchedule ? COLORS.red : '#D9D9D9'},
        ]}
        containerStyle={{marginTop: 15}}
        onPress={() => setShowAdvanceSchedule(!showAdvanceSchedule)}
      />

      {/* ADVACNE_SCHDULE */}
      {showAdvanceSchedule ? (
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
          showsVerticalScrollIndicator={false}>
          {/* {isCollapsed && ( */}
          <View>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <Text style={[styles.subTitle, {flex: 1}]}>Select Days</Text>
              <Text style={([styles.subTitle], {flex: 0.7, paddingLeft: 30})}>
                From
              </Text>
              <Text style={([styles.subTitle], {flex: 0.3})}>To</Text>
            </View>
            {time.map(item => {
              return (
                <View key={item.id} style={{marginTop: 16}}>
                  <ChooseTime
                    day={item.day}
                    containerStyle={{marginBottom: 13}}
                    onToPress={showDatePicker}
                    onFromPress={showDatePicker}
                  />
                </View>
              );
            })}
            <TextButton
              label={'Next'}
              containerStyle={styles.nextButton}
              onPress={() =>
                navigation.navigate(routes.PROFILEVERIFICATIONSTEP5)
              }
            />
          </View>
        </ScrollView>
      ) : null}

      {RenderDatePicker()}
    </SafeAreaView>
  );
};

export default ProfileVerificationStep4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 16,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Bold,
  },
  title: {
    fontSize: 24,
    color: '#030F1C',
    marginTop: 22,
    fontFamily: FONTS.Nunito_Bold,
  },
  discrption: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  generalText: {
    fontSize: 14,
    color: COLORS.black,
    marginTop: 23,
    fontFamily: FONTS.Nunito_Bold,
  },
  text: {
    fontSize: 14,
    color: '#292D3280',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  availableText: {
    fontSize: 14,
    color: '#00000070',
    marginTop: 3,
  },
  selectTimeText: {
    marginTop: 17,
    fontSize: 14,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  time: {
    width: 106,
    height: 50,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ECECEC',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  icon: {
    width: 18,
    height: 18,
    borderRadius: 5,
    marginRight: 4,
    marginLeft: 20,
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Regular,
  },
  nextButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: COLORS.red,
    marginTop: 32,
  },
});
