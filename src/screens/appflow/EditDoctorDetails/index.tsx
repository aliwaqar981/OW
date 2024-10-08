import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';

import {ButtonwithIcon, TextButtonwithIcon} from '../../../components';

import {ArrowLeft1, Edit3, Location, Star1} from '../../../assets/svgicons';
import {Dr} from '../../../assets/images';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfessionalStackParamList} from '../../../navigation/ProfessionalStack';
type Props = NativeStackScreenProps<
  ProfessionalStackParamList,
  'EditDoctorDetails'
>;

const EditDoctorDetails: React.FC<Props> = ({navigation}) => {
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
        source={Dr}
        style={styles.imageContainer}>
        {/* BACK_ARROW_BUTTON */}
        <ButtonwithIcon
          icon={<ArrowLeft1 fill={COLORS.white} width={24} height={24} />}
          containerStyle={{margin: 22}}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
      <View
        style={{
          marginTop: 18,
          paddingHorizontal: 20,
        }}>
        <View style={styles.iconContainer}>
          {/* NAME */}
          <Text style={styles.name}>Dr. Walter</Text>
          <ButtonwithIcon icon={<Edit3 />} />
        </View>
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
        <View style={styles.iconContainer}>
          {/* ABOUT_DOCTOR */}
          <Text style={styles.subTitle}>About Doctor</Text>
          <ButtonwithIcon icon={<Edit3 />} />
        </View>

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
        <View style={styles.iconContainer}>
          {/* APPOINTMENT */}
          <Text style={[styles.subTitle, {marginTop: 0}]}>Appointments</Text>
          <ButtonwithIcon icon={<Edit3 />} />
        </View>
        {/* APPOINTED_CARD */}
        <View style={styles.card}>
          <Text style={[styles.title, {marginTop: 14}]}>
            Physical Therapy Evaluation
          </Text>
          <Text style={[styles.text, {marginTop: 8}]}>1 hour @ $75.00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditDoctorDetails;

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
    color: COLORS.black,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  address: {
    fontSize: 10,
    color: '#C7C7C7',
    marginLeft: 5,
    fontFamily: FONTS.Nunito_Regular,
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
    color: COLORS.red,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  ratingText: {
    fontSize: 14,
    color: '#FCBD18',
    marginRight: 6,
    fontFamily: FONTS.Nunito_SemiBold,
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
    color: COLORS.black,
    marginTop: 21,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  paragraph: {
    fontSize: 12,
    color: '#ABABAB',
    marginTop: 11,
    fontFamily: FONTS.Nunito_Regular,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  card: {
    backgroundColor: '#FBFBFB',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 11,
    color: '#263238',
    fontFamily: FONTS.Nunito_Regular,
  },
  title: {
    fontSize: 15,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
});
