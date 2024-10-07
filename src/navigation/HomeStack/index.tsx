import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../BottomTab';
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

export type BottomStackParamList = {
  Home: undefined;
  TalktoDoctor: undefined;
  VideoArena: undefined;
};
export type HomeStackParamList = {
  bottom: BottomStackParamList;
  Home: undefined;
  TalkToDoctor: undefined;
  VideoArena: undefined;
  Notification: undefined;
  Profile: undefined;
  TermsAndConditions: undefined;
  PrivacyPolicy: undefined;
  AboutUs: undefined;
  Settings: undefined;
  Language: undefined;
  ContactSupport: undefined;
  Community: undefined;
  Chats: undefined;
  ChatDetails: {chatId: string};
  Subscription: undefined;
  ProgramDetails: {programId: string};
  MyProgram: undefined;
  Agenda: undefined;
  BookingList: undefined;
  BookingDetails: {bookingId: string};
  Session: {sessionId: string};
  DoctorDetails: {doctorId?: string};
  EditBookingDetails: {bookingId: string};
  Blogs: undefined;
  VideoBlogs: undefined;
  ChooseDoctor: undefined;
  HomeCheckOut: undefined;
  HomePaymentMethod: undefined;
  AgendaView: undefined;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  const {goBack, navigate} = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: FONTS.Nunito_Bold,
          color: COLORS.black,
        },
        headerLeft: () => (
          <ButtonwithIcon
            icon={<ArrowLeft />}
            onPress={() => navigation.goBack()}
          />
        ),
      })}>
      <HomeStack.Screen name="bottom" component={BottomTabNavigator} />
      <HomeStack.Screen
        name={'Notification'}
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
        name={'Profile'}
        component={Profile}
        options={{
          headerShown: true,
          headerRight: () => (
            <ButtonwithIcon icon={<Cross />} onPress={() => goBack()} />
          ),
          headerLeft: () => <View></View>,
          headerTitle: 'Profile',
          headerTintColor: COLORS.white,
          headerStyle: {
            backgroundColor: COLORS.red,
          },
        }}
      />
      <HomeStack.Screen
        name={'TermsAndConditions'}
        component={TermsAndConditions}
        options={{
          headerShown: true,
          headerTitle: 'Terms & Conditions',
        }}
      />
      <HomeStack.Screen
        name={'PrivacyPolicy'}
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerTitle: 'Privacy Policy',
        }}
      />
      <HomeStack.Screen
        name={'AboutUs'}
        component={AboutUs}
        options={{
          headerShown: true,
          headerTitle: 'About Us',
        }}
      />
      <HomeStack.Screen
        name={'Settings'}
        component={Settings}
        options={{
          headerShown: true,
          headerTitle: 'Setting',
        }}
      />
      <HomeStack.Screen
        name={'Language'}
        component={Language}
        options={{
          headerShown: true,
          headerTitle: 'Language',
        }}
      />
      <HomeStack.Screen
        name={'ContactSupport'}
        component={ContactSupport}
        options={{
          headerShown: true,
          headerTitle: 'Contact Support',
        }}
      />
      <HomeStack.Screen
        name={'Community'}
        component={Community}
        options={{
          headerShown: true,
          headerTitle: 'Contact Support',
        }}
      />
      <HomeStack.Screen
        name={'ChatDetails'}
        component={ChatDetails}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={'Chats'}
        component={Chats}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={'Subscription'}
        component={Subscription}
        options={{
          headerShown: true,
          headerTitle: 'Subscription',
        }}
      />
      <HomeStack.Screen
        name={'MyProgram'}
        component={MyProgram}
        options={{
          headerShown: true,
          headerTitle: 'My Programs',
        }}
      />
      <HomeStack.Screen
        name={'ProgramDetails'}
        component={ProgramDetails}
        options={{
          headerShown: true,
          headerTitle: 'Program Details',
        }}
      />
      <HomeStack.Screen
        name={'AgendaView'}
        component={AgendaView}
        options={{
          headerShown: true,
          headerTitle: 'Your Bookings Calendar',
        }}
      />
      <HomeStack.Screen
        name={'BookingList'}
        component={BookingList}
        options={{
          headerShown: true,

          headerRight: () => (
            <ButtonwithIcon
              icon={<Calendar4 />}
              onPress={() => navigate('Agenda')}
            />
          ),
          headerTitle: 'Bookings',
        }}
      />
      <HomeStack.Screen
        name={'BookingDetails'}
        component={BookingDetails}
        options={({route}) => ({
          title: route.params.params,
          headerShown: true,
          headerRight: () => (
            <ButtonwithIcon
              icon={<Calendar4 />}
              onPress={() => navigate('Agenda')}
            />
          ),
        })}
      />
      <HomeStack.Screen
        name={'Session'}
        component={Session}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={'DoctorDetails'}
        component={DoctorDetails}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={'EditBookingDetails'}
        component={EditBookingDetails}
        options={{
          headerShown: true,
          headerTitle: 'Edit Your Appointment',
        }}
      />

      <HomeStack.Screen
        name={'Blogs'}
        component={Blogs}
        options={{
          headerShown: true,
          headerTitle: 'Blogs',
        }}
      />
      <HomeStack.Screen
        name={'VideoBlogs'}
        component={VideoBlogs}
        options={{
          headerShown: true,
          headerTitle: 'Treatment Videos',
        }}
      />
      <HomeStack.Screen
        name={'ChooseDoctor'}
        component={ChooseDoctor}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Home',
        }}
      />
      <HomeStack.Screen
        name={'HomeCheckOut'}
        component={HomeCheckOut}
        options={{
          headerShown: true,
          headerTitle: 'Payment Methods',
        }}
      />
      <HomeStack.Screen
        name={'HomePaymentMethod'}
        component={HomePaymentMethod}
        options={{
          headerShown: true,
          headerTitle: 'Payment Methods',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
