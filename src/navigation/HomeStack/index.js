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
  AgendaView,
  BookingList,
  BookingDetails,
  Session,
  DoctorDetails,
  EditBookingDetails,
  Blogs,
  VideoBlogs,
  ChooseDoctor,
  HomeCheckOut,
  HomePaymentMethod,
} from '../../screens/appflow';
import {ButtonwithIcon} from '../../components';
import {ArrowLeft, ArrowLeft2, Calendar4, Cross} from '../../assets/svgicons';
import {COLORS, FONTS} from '../../themes';
import Language from '../../screens/appflow/Language';
import {useNavigation} from '@react-navigation/native';
import {CheckOut, PaymentMethod} from '../../screens/authflow';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  const {goBack, navigate} = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: FONTS.Nunito_Bold,
          color: COLORS.black,
        },
      }}>
      <HomeStack.Screen name="bottom" component={BottomTabNavigator} />
      <HomeStack.Screen
        name={routes.NOTIFICATION}
        component={Notification}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft2 />} onPress={() => goBack()} />
          ),
          headerRight: () => (
            <ButtonwithIcon icon={<Cross />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Notifications',
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerStyle: {
            backgroundColor: COLORS.red,
          },
        }}
      />
      <HomeStack.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          headerShown: true,
          headerRight: () => (
            <ButtonwithIcon icon={<Cross />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
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
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Program Details',
        }}
      />
      <HomeStack.Screen
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
      <HomeStack.Screen
        name={routes.BOOKINGLIST}
        component={BookingList}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerRight: () => (
            <ButtonwithIcon
              icon={<Calendar4 />}
              onPress={() => navigate(routes.AGENDA)}
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
      <HomeStack.Screen
        name={routes.SESSION}
        component={Session}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={routes.DOCTORDETAILS}
        component={DoctorDetails}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={routes.EDITBOOKINGDETAILS}
        component={EditBookingDetails}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Edit Your Appointment',
        }}
      />
      {/* <HomeStack.Screen
        name={routes.PAYMENTMETHOD}
        component={PaymentMethod}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Payment Methods',
        }}
      /> */}
      {/* <HomeStack.Screen
        name={routes.CHECKOUT}
        component={CheckOut}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Payment Methods',
        }}
      /> */}
      <HomeStack.Screen
        name={routes.BLOGS}
        component={Blogs}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Blogs',
        }}
      />
      <HomeStack.Screen
        name={routes.VIDEOBLOGS}
        component={VideoBlogs}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Treatment Videos',
        }}
      />
      <HomeStack.Screen
        name={routes.CHOOSEDOCTOR}
        component={ChooseDoctor}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Home',
        }}
      />
      <HomeStack.Screen
        name={routes.HOMECHECKOUT}
        component={HomeCheckOut}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Payment Methods',
        }}
      />
      <HomeStack.Screen
        name={routes.HOMEPAYMENTMETHOD}
        component={HomePaymentMethod}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Payment Methods',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
