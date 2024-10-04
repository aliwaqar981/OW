import React from 'react';
import {TouchableOpacity} from 'react-native';
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
  Welcome,
  ProfileVerificationStep1,
  ProfileVerificationStep2,
  ProfileVerificationStep3,
  ProfileVerificationStep4,
  ProfileVerificationStep5,
  ProfileVerificationStep6,
  ProfileVerificationStep7,
} from '../../screens/authflow';
import {ArrowLeft} from '../../assets/svgicons';
import {COLORS, FONTS} from '../../themes';

// Define the types for the navigation stack parameters
export type AuthStackParamList = {
  Splash: undefined;
  Login: {key: string};
  SignUp: {key: string};
  ForgotPassword: {key: string};
  VerifyOTP: {key: string};
  CreatePassword: {key: string};
  Subscribe: undefined;
  PaymentMethod: {screen: string};
  CheckOut: undefined;
  Welcome: undefined;
  ProfileVerificationStep1: undefined;
  ProfileVerificationStep2: undefined;
  ProfileVerificationStep3: undefined;
  ProfileVerificationStep4: undefined;
  ProfileVerificationStep5: undefined;
  ProfileVerificationStep6: undefined;
  ProfileVerificationStep7: undefined;
};
// Create a typed stack navigator
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={({navigation}) => ({
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
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="VerifyOTP" component={VerifyOTP} />
      <AuthStack.Screen name="CreatePassword" component={CreatePassword} />
      <AuthStack.Screen name="Subscribe" component={Subscribe} />
      <AuthStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: true, headerTitle: 'Payment Methods'}}
      />
      <AuthStack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{headerShown: true, headerTitle: 'Payment Methods'}}
      />
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen
        name="ProfileVerificationStep1"
        component={ProfileVerificationStep1}
      />
      <AuthStack.Screen
        name="ProfileVerificationStep2"
        component={ProfileVerificationStep2}
      />
      <AuthStack.Screen
        name="ProfileVerificationStep3"
        component={ProfileVerificationStep3}
      />
      <AuthStack.Screen
        name="ProfileVerificationStep4"
        component={ProfileVerificationStep4}
      />
      <AuthStack.Screen
        name="ProfileVerificationStep5"
        component={ProfileVerificationStep5}
      />
      <AuthStack.Screen
        name="ProfileVerificationStep6"
        component={ProfileVerificationStep6}
      />
      <AuthStack.Screen
        name="ProfileVerificationStep7"
        component={ProfileVerificationStep7}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
