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
} from '../../screens/authflow';
import {routes} from '../../constants/routes';
import {ButtonwithIcon} from '../../components';
import {ArrowLeft} from '../../assets/svgicons';
import {COLORS} from '../../themes';

const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = ({navigation}) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 16,
          color: COLORS.black,
        },
      }}>
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
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'left',
          headerTitle: 'Payment Methods',
        }}
      />
      <AuthStack.Screen
        name={routes.CHECKOUT}
        component={CheckOut}
        options={{
          headerShown: true,
          headerLeft: () => (
            <ButtonwithIcon
              icon={<ArrowLeft />}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleAlign: 'left',
          headerTitle: 'Payment Methods',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
