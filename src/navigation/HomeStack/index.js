/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from '../BottomTab';
import {routes} from '../../constants';
import {
  AboutUs,
  Notification,
  PrivacyPolicy,
  Profile,
  TermsAndConditions,
} from '../../screens/appflow';
import {ButtonwithIcon} from '../../components';
import {ArrowLeft, Cross} from '../../assets/svgicons';
import {COLORS} from '../../themes';
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
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
