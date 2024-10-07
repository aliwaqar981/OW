import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Image6, Profile} from '../../../assets/images';
import {Danger, Settings1} from '../../../assets/svgicons';
import {
  ApprovedAppointment,
  ButtonwithIcon,
  Chart,
  EmptyState,
  TextButton,
} from '../../../components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfessionalTabParamList} from '../../../navigation/ProfessionalBottomTab';
type Props = NativeStackScreenProps<
  ProfessionalTabParamList,
  'ProfessionalHome'
>;

const ProfessionalHome: React.FC<Props> = ({navigation}) => {
  const [isEmptyState, setIsEmptyState] = React.useState(false);

  setTimeout(() => {
    setIsEmptyState(true);
  }, 2000);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* PROFILE_IMAGE */}
        <Image source={Profile} style={styles.imageContainer} />
        <View style={styles.innerHeaderContainer}>
          <View>
            {/* NAME */}
            <Text style={styles.name}>Dr. Walter</Text>
            {/* SPECIALITY */}
            <Text style={styles.specilatyText}>Therapist</Text>
          </View>
          <ButtonwithIcon
            icon={<Settings1 fill={COLORS.black} />}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        showsVerticalScrollIndicator={false}>
        {/* APPROVAL_INFO */}
        <View style={styles.approvalContainer}>
          <Danger />
          <View style={{paddingLeft: 12}}>
            <Text style={styles.approvalText}>
              Your profile approval is pending!
            </Text>
            <Text style={styles.text}>You will be notified soon</Text>
          </View>
        </View>

        {/* REQUESTED_AND_ACTIVE_BOOKING_CONTAINER */}
        <View style={styles.requestActiveBookingContainer}>
          {/*REQUESTED */}
          <View style={styles.requestedContainer}>
            <Text style={styles.requestedText}>Requested</Text>
            <Text style={styles.text1}>10</Text>
          </View>
          {/* ACTIVE */}
          <View
            style={[styles.requestedContainer, {backgroundColor: '#CFFFDA'}]}>
            <Text style={styles.requestedText}>Active Bookings</Text>
            <Text style={styles.text1}>05</Text>
          </View>
        </View>
        <View>
          {/* TODAY_APPOINTMENT */}
          <View style={styles.todayAppointmentContainer}>
            <Text style={styles.appointmentText}>Appointments Today</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View>
            {!isEmptyState ? (
              <EmptyState
                image={Image6}
                paragraph={'Nothing to show here!'}
                paragraphStyle={{color: '#969696', marginTop: 10}}
              />
            ) : (
              <View>
                <ApprovedAppointment
                  containerStyle={{marginBottom: 3, marginHorizontal: 20}}
                />
              </View>
            )}
          </View>
        </View>
        {/* PRICE_INFO */}
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.price}>$325.00</Text>
            <Text style={styles.monthText}>This Month</Text>
          </View>
          <TextButton label={'Details'} labelStyle={{color: COLORS.red}} />
        </View>
        {/* LINE */}
        <View style={styles.line} />
        <Chart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfessionalHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 46,
    height: 46,
  },
  innerHeaderContainer: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
  specilatyText: {
    fontSize: 11,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Light,
  },
  innerContainer: {
    // paddingHorizontal: 20,
    paddingTop: 24,
  },
  approvalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDD83520',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  approvalText: {
    fontSize: 12,
    fontFamily: FONTS.Nunito_Bold,
    color: COLORS.black,
  },
  text: {
    fontSize: 11,
    fontFamily: FONTS.Nunito_Light,
    color: COLORS.black,
  },
  requestActiveBookingContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  requestedContainer: {
    backgroundColor: '#FFDFDF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    width: '47%',
    height: 90,
    paddingLeft: 15,
  },
  requestedText: {
    fontSize: 14,
    color: '#5A5A5A',
  },
  text1: {
    fontSize: 15,
    fontFamily: FONTS.Nunito_SemiBold,
    paddingTop: 5,
  },
  todayAppointmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 27,
    paddingBottom: 16,
    marginHorizontal: 20,
  },
  appointmentText: {
    fontSize: 16,
    color: '#030F1C',
    fontFamily: FONTS.Nunito_Bold,
  },
  viewAllText: {
    fontSize: 14,
    color: '#030F1C',
    fontFamily: FONTS.Nunito_Regular,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 35,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_SemiBold,
  },
  monthText: {
    fontSize: 12,
    color: '#D5D6D7',
    fontFamily: FONTS.Nunito_Medium,
  },
  line: {
    height: 1,
    backgroundColor: '#EAEBEB',
    marginVertical: 8,
  },
});
