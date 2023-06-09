/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreatePassword,
  ForgotPassword,
  Login,
  SignUp,
  Splash,
  Subscribe,
  VerifyOTP,
  PaymentMethod,
  CheckOut,
  OnBoard,
  Welcome,
  ProfileImage,
  Description,
  AddImage,
  UpdateSchedule,
  AddServices,
  ServiceDetails,
  Eligibility,
} from '../../screens/authflow';
import {routes} from '../../constants/routes';
import {ButtonwithIcon} from '../../components';
import {ArrowLeft} from '../../assets/svgicons';
import {COLORS, FONTS} from '../../themes';
import {useNavigation} from '@react-navigation/native';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = ({navigation}) => {
  const {goBack} = useNavigation();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          color: COLORS.black,
          fontFamily: FONTS.Nunito_Bold,
        },
      }}>
      {/* <AuthStack.Screen name={routes.ONBOARD} component={OnBoard} />s */}
      <AuthStack.Screen name={routes.SPLASH} component={Splash} />
      <AuthStack.Screen name={routes.LOGIN} component={Login} />
      <AuthStack.Screen name={routes.SIGNUP} component={SignUp} />
      <AuthStack.Screen
        name={routes.FORGOTPASSWORD}
        component={ForgotPassword}
      />
      <AuthStack.Screen name={routes.VERIFYOTP} component={VerifyOTP} />
      <AuthStack.Screen
        name={routes.CREATEPASSWORD}
        component={CreatePassword}
      />
      <AuthStack.Screen name={routes.SUBSCRIBE} component={Subscribe} />
      <AuthStack.Screen
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
      />
      <AuthStack.Screen
        name={routes.CHECKOUT}
        component={CheckOut}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon icon={<ArrowLeft />} onPress={() => goBack()} />
          ),
          headerTitleAlign: 'left',
          headerTitle: 'Payment Methods',
        }}
      />
      <AuthStack.Screen name={routes.WELCOME} component={Welcome} />
      <AuthStack.Screen name={routes.PROFILEIMAGE} component={ProfileImage} />
      <AuthStack.Screen name={routes.ADDPROFILE} component={AddImage} />
      <AuthStack.Screen name={routes.DISCRIPTION} component={Description} />
      <AuthStack.Screen
        name={routes.UPDATESCHEDULE}
        component={UpdateSchedule}
      />
      <AuthStack.Screen name={routes.ADDSERVICES} component={AddServices} />
      <AuthStack.Screen
        name={routes.SERVICEDETAILS}
        component={ServiceDetails}
      />
      <AuthStack.Screen name={routes.ELIGIBILITY} component={Eligibility} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
