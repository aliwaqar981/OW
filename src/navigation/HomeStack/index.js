/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../BottomTab';
import {routes} from '../../constants';
import {
  AboutUs,
  Community,
  ContactSupport,
  Notification,
  PrivacyPolicy,
  Profile,
  Settings,
  TermsAndConditions,
  Chats,
  ChatDetails,
  Subscription,
  MyProgram,
  ProgramDetails,
  Calendar,
  BookingList,
  BookingDetails,
  Session,
} from '../../screens/appflow';
import {ButtonwithIcon} from '../../components';
import {ArrowLeft, Cross} from '../../assets/svgicons';
import {COLORS} from '../../themes';
import Language from '../../screens/appflow/Language';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false, headerShadowVisible: false}}>
      <HomeStack.Screen name="bottom" component={BottomTabNavigator} />
      <HomeStack.Screen
        name={routes.NOTIFICATION}
        component={Notification}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Notifications',
        }}
      />
      <HomeStack.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          headerShown: true,
          headerRight: () => (
            <ButtonwithIcon
              icon={<Cross />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeft: () => <View></View>,
          headerTitleAlign: 'center',
          headerTitle: 'Profile',
          headerTintColor: COLORS.white,
          headerStyle: {
            backgroundColor: COLORS.red,
          },
        }}
      />
      <HomeStack.Screen
        name={routes.TERMSANDCONDITION}
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Terms & Conditions',
        }}
      />
      <HomeStack.Screen
        name={routes.PRIVACYPOLICY}
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Privacy Policy',
        }}
      />
      <HomeStack.Screen
        name={routes.ABOUTUS}
        component={AboutUs}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'About Us',
        }}
      />
      <HomeStack.Screen
        name={routes.SETTINGS}
        component={Settings}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Setting',
        }}
      />
      <HomeStack.Screen
        name={routes.LANGUAGE}
        component={Language}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Language',
        }}
      />
      <HomeStack.Screen
        name={routes.CONTACTSUPPORT}
        component={ContactSupport}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Contact Support',
        }}
      />
      <HomeStack.Screen
        name={routes.COMMUNITY}
        component={Community}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Contact Support',
        }}
      />
      <HomeStack.Screen
        name={routes.CHATDETAILS}
        component={ChatDetails}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.CHATS}
        component={Chats}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={routes.SUBSCRIPTION}
        component={Subscription}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Subscription',
        }}
      />
      <HomeStack.Screen
        name={routes.MYPROGRAM}
        component={MyProgram}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'My Programs',
        }}
      />
      <HomeStack.Screen
        name={routes.PROGRAMDETAILS}
        component={ProgramDetails}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Program Details',
        }}
      />
      <HomeStack.Screen
        name={routes.CALENDAR}
        component={Calendar}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Your Bookings Calendar',
        }}
      />
      <HomeStack.Screen
        name={routes.BOOKINGLIST}
        component={BookingList}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Bookings',
        }}
      />
      <HomeStack.Screen
        name={routes.BOOKINGDETAILS}
        component={BookingDetails}
        options={({route}) => ({
          title: route.params.params,
          headerShown: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <HomeStack.Screen
        name={routes.SESSION}
        component={Session}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
