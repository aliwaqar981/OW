/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../themes';

import {
  AppointmentSchdule,
  ButtonwithIcon,
  ChooseAppointment,
  TextButton,
  TextButtonwithIcon,
} from '../../../components';

import {ArrowLeft1, Location, Star1} from '../../../assets/svgicons';
import Modal from 'react-native-modal';
import {routes} from '../../../constants';
const DoctorDetails = ({navigation, route}) => {
  const {params} = route.params;
  // console.log('params', params);
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
    <SafeAreaView style={styles.container}>
      {/* PROFILE_IMAGE */}
      <ImageBackground
        resizeMode="cover"
        source={params.image}
        style={styles.imageContainer}>
        {/* BACK_ARROW_BUTTON */}
        <ButtonwithIcon
          icon={<ArrowLeft1 fill={COLORS.white} width={24} height={24} />}
          containerStyle={{margin: 22}}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
      <View style={{marginTop: 18, paddingHorizontal: 20}}>
        {/* NAME */}
        <Text style={styles.name}>{params.name}</Text>
        {/* ADDRES */}
        <TextButtonwithIcon
          leftIcon={<Location />}
          label={'New York, USA'}
          labelStyle={styles.address}
          containerStyle={{marginTop: 6}}
          disabled
        />
        {/* RATING_AND_INFO_CONTAINER */}
        <View style={{marginTop: 12, flexDirection: 'row'}}>
          <View style={styles.info}>
            <Text style={styles.infoText}>Therapist</Text>
          </View>
          {/* RATING */}
          <TextButtonwithIcon
            label={'4.5'}
            labelStyle={styles.ratingText}
            rightIcon={<Star1 />}
            containerStyle={styles.ratingContainer}
            disabled
          />
        </View>
        {/* ABOUT_DOCTOR */}
        <Text style={styles.subTitle}>About Doctor</Text>
        {/* DISCRIPTION */}
        <Text style={styles.paragraph}>
          I am a doctor of physical therapy in Fort Lauderdale, FL and have been
          a licensed practicing health care provider for more than 13 years. I’m
          here to help you achieve your strength, mobility, and wellness goals
          so that you can become the best version of yourself. Together, we’ll
          create measurable, personalized targets to help you reach your desired
          level of optimal health. Then we’ll make sure you’re in the perfect
          place for ongoing success by ensuring you have a clear and easy to
          follow path for self-maintenance.
        </Text>
      </View>
      <View style={styles.footer}>
        {/* APPOINTMENT */}
        <Text style={[styles.subTitle, {marginTop: 0}]}>Appointments</Text>
        {/* BOOK_APPOINTMENT */}
        <TextButton
          label={'Book Appointment'}
          containerStyle={styles.appointmentButton}
          onPress={toggleModal}
        />
        <Modal
          isVisible={isModalVisible}
          backdropOpacity={0.3}
          onBackdropPress={() => toggleModal()}
          style={styles.appointmentModalContainer}>
          <View>
            <ChooseAppointment
              onContinuePress={() => {
                toggleModal();
                setTimeout(() => {
                  toggleModalScedule();
                }, 500);
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
            <AppointmentSchdule
              onPress={() => {
                toggleModalScedule();
                setTimeout(() => {
                  navigation.navigate(routes.EDITBOOKINGDETAILS);
                }, 500);
              }}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: 280,
    width: '100%',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
  },
  address: {
    fontSize: 15,
    color: '#C7C7C7',
    marginLeft: 5,
    fontWeight: '500',
  },
  info: {
    width: 90,
    height: 30,
    backgroundColor: '#EB4E1F20',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30 / 2,
  },
  infoText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.red,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FCBD18',
    marginRight: 6,
  },
  ratingContainer: {
    width: 60,
    height: 30,
    backgroundColor: '#FCBD1830',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2,
    marginLeft: 11,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black,
    marginTop: 21,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ABABAB',
    marginTop: 11,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    paddingBottom: 45,
  },
  appointmentButton: {
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: COLORS.red,
    marginTop: 25,
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
});
