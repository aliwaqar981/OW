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
} from '../../screens/appflow';
import {ButtonwithIcon} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from '../../assets/svgicons';
const ProfessionalStack = createNativeStackNavigator();
const ProfessionalStackNavigator = () => {
  const {goBack} = useNavigation();
  return (
    <ProfessionalStack.Navigator screenOptions={{headerShown: false}}>
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
    </ProfessionalStack.Navigator>
  );
};

export default ProfessionalStackNavigator;
