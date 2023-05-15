/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfessionalBottomTab from '../ProfessionalBottomTab';
import {routes} from '../../constants';
import {
  AboutUs,
  ChatDetails,
  Community,
  PrivacyPolicy,
  Settings,
  TermsAndConditions,
  Chats,
  EditDoctorDetails,
  AgendaView,
  ProfessionalBookingDetails,
  Session,
  EarningsDetails,
} from '../../screens/appflow';
import {ButtonwithIcon} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft, Calendar, Calendar4} from '../../assets/svgicons';
import {COLORS, FONTS} from '../../themes';

const ProfessionalStack = createNativeStackNavigator();
const ProfessionalStackNavigator = () => {
  const {goBack, navigate} = useNavigation();
  return (
    <ProfessionalStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: FONTS.Nunito_Bold,
          color: COLORS.black,
        },
      }}>
      <ProfessionalStack.Screen
        name="professionaltab"
        component={ProfessionalBottomTab}
        options={{headerShown: false}}
      />

      <ProfessionalStack.Screen
        name={routes.SETTINGS}
        component={Settings}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Setting',
        }}
      />
      <ProfessionalStack.Screen
        name={routes.TERMSANDCONDITION}
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Terms & Conditions',
        }}
      />
      <ProfessionalStack.Screen
        name={routes.PRIVACYPOLICY}
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Privacy Policy',
        }}
      />
      <ProfessionalStack.Screen
        name={routes.ABOUTUS}
        component={AboutUs}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'About Us',
        }}
      />
      <ProfessionalStack.Screen
        name={routes.COMMUNITY}
        component={Community}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Contact Support',
        }}
      />
      <ProfessionalStack.Screen
        name={routes.CHATDETAILS}
        component={ChatDetails}
        options={{
          headerShown: false,
        }}
      />
      <ProfessionalStack.Screen
        name={routes.CHATS}
        component={Chats}
        options={{headerShown: false}}
      />
      <ProfessionalStack.Screen
        name={routes.EDITDOCTORDETAILS}
        component={EditDoctorDetails}
        options={{headerShown: false}}
      />
      <ProfessionalStack.Screen
        name={routes.AGENDA}
        component={AgendaView}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Your Bookings Calendar',
        }}
      />
      <ProfessionalStack.Screen
        name={routes.PROFESSIONALBOOKINGDETAILS}
        component={ProfessionalBookingDetails}
        options={({route}) => ({
          title: route.params.params,
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerRight: () => (
            <ButtonwithIcon
              icon={<Calendar4 />}
              onPress={() => navigate(routes.AGENDA)}
            />
          ),
        })}
      />
      <ProfessionalStack.Screen name={routes.SESSION} component={Session} />
      <ProfessionalStack.Screen
        name={routes.EARNINGSDETAILS}
        component={EarningsDetails}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Earnings Detail',
          headerShadowVisible: false,
        }}
      />
    </ProfessionalStack.Navigator>
  );
};

export default ProfessionalStackNavigator;
