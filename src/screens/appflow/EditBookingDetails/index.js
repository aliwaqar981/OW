/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import Modal from 'react-native-modal';

import {
  AppointmentSchdule,
  ChooseAppointment,
  TextButton,
} from '../../../components';
import {routes} from '../../../constants';
const EditBookingDetails = ({navigation}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isScheduleModalVisible, setIsScheduleModalVisible] =
    React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalScedule = () => {
    setIsScheduleModalVisible(!isScheduleModalVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are Confirming Appointment with:</Text>
      {/* DOCTOR_INFO */}
      <View style={styles.doctorInfoContainer}>
        {/* VERTICAL_LINES */}
        <View style={styles.lineStyles} />
        <View style={{flex: 1}}>
          <View style={styles.nameAndBtnContainer}>
            {/* NAME */}
            <Text style={styles.name}>DR. Walters</Text>
            <TextButton
              label={'Edit'}
              labelStyle={{color: COLORS.red}}
              onPress={() => navigation.goBack()}
            />
          </View>
          {/* DOC_TYPE */}
          <Text style={styles.docType}>Therapist</Text>
        </View>
      </View>
      {/* TODAY_APPOINTMENT */}
      <View style={styles.appointmentContainer}>
        <Text style={styles.appointmentText}>Appointments </Text>
        <TextButton
          label={'Edit'}
          labelStyle={{color: COLORS.red}}
          onPress={toggleModal}
        />
      </View>
      <TouchableOpacity style={[styles.appointmentDetails]}>
        {/* SPECIALITY */}
        <Text style={styles.speciality}>Bio Mechanical</Text>
        {/* TIME */}
        <Text style={styles.timeText}>1 hour @ $75.00</Text>
      </TouchableOpacity>
      {/* DATE_&_TIME */}
      <View style={{paddingTop: 50}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.dateText}>Date & Time:</Text>
          <TextButton
            label={'Edit'}
            labelStyle={{color: COLORS.red}}
            onPress={toggleModalScedule}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>Feb 3, Sunday</Text>
          {/* DOT */}
          <View style={styles.dot} />
          <Text style={styles.text}>Date & Time:</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TextButton
          label={'Book Appointment'}
          containerStyle={styles.appointmentButton}
          onPress={() => navigation.navigate(routes.HOMEPAYMENTMETHOD)}
        />
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Eget varius est posuere augue
          cursus suspendisse.
        </Text>
      </View>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => toggleModal()}
        style={styles.appointmentModalContainer}>
        <View>
          <ChooseAppointment
            onContinuePress={() => {
              toggleModal();
            }}
          />
        </View>
      </Modal>
      <Modal
        isVisible={isScheduleModalVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => toggleModalScedule()}
        style={styles.scheduleModalContainer}>
        <View>
          <AppointmentSchdule onPress={() => {}} />
        </View>
      </Modal>
    </View>
  );
};

export default EditBookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.Nunito_Bold,
    color: COLORS.black,
  },
  lineStyles: {
    height: 33,
    backgroundColor: COLORS.red,
    width: 12,
    marginRight: 5,
  },
  name: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
    lineHeight: 20,
  },
  docType: {
    fontSize: 12,
    color: '#404040',
    fontFamily: FONTS.Nunito_Regular,
    lineHeight: 15,
  },
  nameAndBtnContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  doctorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 18,
  },
  appointmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 16,
  },
  appointmentText: {
    fontSize: 16,
    color: '#030F1C',
    fontFamily: FONTS.Nunito_Bold,
  },
  appointmentDetails: {
    backgroundColor: '#FF3D0010',
    paddingVertical: 20,
    paddingLeft: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.red,
  },
  dateText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  text: {
    fontSize: 12,
    color: '#404040',
    fontFamily: FONTS.Nunito_Regular,
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: '#D9D9D9',
    borderRadius: 7 / 2,
    marginHorizontal: 4,
  },
  cancleButton: {
    width: '25%',
    height: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  footer: {
    flex: 1,
    paddingTop: 60,
  },
  appointmentButton: {
    height: 50,
    backgroundColor: COLORS.red,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 17,
  },
  paragraph: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    paddingTop: 25,
    fontFamily: FONTS.Nunito_Regular,
  },
  appointmentModalContainer: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scheduleModalContainer: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  speciality: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  timeText: {
    fontSize: 12,
    color: '#404040',
    fontFamily: FONTS.Nunito_Light,
    paddingTop: 8,
  },
});
