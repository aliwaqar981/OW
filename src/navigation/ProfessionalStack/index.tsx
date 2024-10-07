import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import ProfessionalBottomTab from '../ProfessionalBottomTab';
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
import {ArrowLeft, Calendar4} from '../../assets/svgicons';
import {COLORS, FONTS} from '../../themes';

// Define type for the stack parameters
type ProfessionalStackParamList = {
  professionaltab: undefined;
  Settings: undefined;
  TermsAndConditions: undefined;
  PrivacyPolicy: undefined;
  AboutUs: undefined;
  Community: undefined;
  ChatDetails: undefined;
  Chats: undefined;
  EditDoctorDetails: undefined;
  Agenda: undefined;
  ProfessionalBookingDetails: {params: string};
  Session: undefined;
  EarningsDetails: undefined;
};

const ProfessionalStack =
  createNativeStackNavigator<ProfessionalStackParamList>();

const ProfessionalStackNavigator: React.FC = () => {
  return (
    <ProfessionalStack.Navigator
      screenOptions={({navigation}): NativeStackNavigationOptions => ({
        headerShown: false,
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity
            style={{width: 30}}
            onPress={() => navigation.goBack()}
            hitSlop={10}>
            <ArrowLeft />
          </TouchableOpacity>
        ),
        headerTitleStyle: {
          fontSize: 16,
          color: COLORS.black,
          fontFamily: FONTS.Nunito_Bold,
        },
      })}>
      <ProfessionalStack.Screen
        name="professionaltab"
        component={ProfessionalBottomTab}
        options={{headerShown: false}}
      />

      <ProfessionalStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Setting',
        }}
      />

      <ProfessionalStack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Terms & Conditions',
        }}
      />

      <ProfessionalStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Privacy Policy',
        }}
      />

      <ProfessionalStack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'About Us',
        }}
      />

      <ProfessionalStack.Screen
        name="Community"
        component={Community}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Contact Support',
        }}
      />

      <ProfessionalStack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={{headerShown: false}}
      />

      <ProfessionalStack.Screen
        name="Chats"
        component={Chats}
        options={{headerShown: false}}
      />

      <ProfessionalStack.Screen
        name="EditDoctorDetails"
        component={EditDoctorDetails}
        options={{headerShown: false}}
      />

      <ProfessionalStack.Screen
        name="Agenda"
        component={AgendaView}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Your Bookings Calendar',
        }}
      />

      <ProfessionalStack.Screen
        name="ProfessionalBookingDetails"
        component={ProfessionalBookingDetails}
        options={({route, navigation}) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: route.params.params,
          headerRight: () => (
            <TouchableOpacity
              style={{width: 30, marginRight: 20}}
              onPress={() => navigation.navigate('Agenda')}
              hitSlop={10}>
              <Calendar4 />
            </TouchableOpacity>
          ),
        })}
      />

      <ProfessionalStack.Screen name="Session" component={Session} />

      <ProfessionalStack.Screen
        name="EarningsDetails"
        component={EarningsDetails}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Earnings Detail',
          headerShadowVisible: false,
        }}
      />
    </ProfessionalStack.Navigator>
  );
};

export default ProfessionalStackNavigator;
