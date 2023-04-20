/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../../../themes';
import {Logo} from '../../../assets/images';

import {Email, Eye, GoogleLogo, Lock} from '../../../assets/svgicons';
import {Forminput, TextButton, TextButtonwithIcon} from '../../../components';
import {routes} from '../../../constants/routes';
import {AuthContext} from '../../../../App';
const Login = ({navigation}) => {
  const {setUserId} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO */}
      <Image source={Logo} style={styles.logo} />
      {/* TITLE */}
      <Text style={styles.title}>Welcome Back</Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>
        Welcolme back! Please enter your details.
      </Text>
      {/* INPUT_FIELDS */}
      <View style={{marginHorizontal: 20, marginTop: 24}}>
        {/* EMAIL_INPUT_FEILDS */}
        <Forminput
          placeholder={'Email'}
          placeholderTextColor="#292D3260"
          leftIcon={<Email />}
        />
        {/* PASSWORD_INPUT_FEILDS */}
        <Forminput
          placeholder={'Password'}
          placeholderTextColor="#292D3260"
          leftIcon={<Lock />}
          righIcon={<Eye />}
          containerStyle={{marginTop: 12}}
        />
      </View>
      {/* FORGOT_PASSWORD_BUTTON */}
      <TextButton
        label={'Forgot Password?'}
        labelStyle={{color: '#D0D0D0'}}
        containerStyle={styles.forgotPasswordButton}
        onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}
      />
      {/* LOGIN_IN_BUTTON */}
      <TextButton
        label={'Log In'}
        labelStyle={{color: COLORS.white}}
        containerStyle={styles.loginButton}
        onPress={() => setUserId('uid')}
      />
      {/* LINE_DIVIDER */}
      <View style={styles.dividerContainer}>
        <View style={styles.lineStyles} />
        <Text style={styles.text}>Or</Text>
        <View style={styles.lineStyles} />
      </View>
      {/* GOOGLE_BUTTON */}
      <TextButtonwithIcon
        label={'Continue with Google'}
        leftIcon={<GoogleLogo />}
        labelStyle={{color: '#353535', marginLeft: 15}}
        containerStyle={styles.googleButton}
      />
      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#8D8D8D', fontSize: 15}}>
            Don’t have an account?
          </Text>
          <TextButton
            label={'Sign up here'}
            labelStyle={{color: COLORS.primary, marginLeft: 7}}
            onPress={() => navigation.navigate(routes.SIGNUP)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 167,
    height: 47,
    alignSelf: 'center',
    marginTop: 25,
  },
  title: {
    marginTop: 35,
    fontSize: 24,
    fontWeight: '700',
    color: '#030F1C',
    textAlign: 'center',
  },
  paragraph: {
    marginTop: 7,
    fontSize: 14,
    color: '#8D8D8D',
    textAlign: 'center',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
    fontSize: 14,
    marginRight: 20,
  },
  loginButton: {
    height: 52,
    backgroundColor: COLORS.primary,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 38,
  },
  dividerContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 59,
    alignItems: 'center',
  },
  lineStyles: {
    height: 1,
    backgroundColor: '#585C60',
    flex: 1,
  },
  text: {
    marginHorizontal: 3,
    fontSize: 14,
    color: '#585C60',
  },
  googleButton: {
    backgroundColor: '#F2F2F2',
    marginHorizontal: 30,
    paddingLeft: 16,
    paddingVertical: 12,
    marginTop: 40,
    borderRadius: 8,
  },
  footer: {
    flex: 1,
    marginBottom: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
