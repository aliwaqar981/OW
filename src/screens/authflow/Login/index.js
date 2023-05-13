/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Logo} from '../../../assets/images';

import {
  Apple,
  Email,
  Eye,
  FB,
  GoogleLogo,
  Lock,
} from '../../../assets/svgicons';
import {
  ButtonwithIcon,
  Forminput,
  TextButton,
  TextButtonwithIcon,
} from '../../../components';
import {routes} from '../../../constants/routes';
import {AuthContext} from '../../../../App';

const Login = ({navigation, route}) => {
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
        labelStyle={{color: '#D0D0D0', fontFamily: FONTS.Nunito_SemiBold}}
        containerStyle={styles.forgotPasswordButton}
        onPress={() =>
          navigation.navigate(routes.FORGOTPASSWORD, {key: route.params.key})
        }
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
      {route.params.key == 'therapist' ? (
        <View style={styles.socialMediaButtonContainer}>
          <ButtonwithIcon
            icon={<GoogleLogo />}
            containerStyle={styles.button}
          />
          <ButtonwithIcon
            icon={<FB />}
            containerStyle={[styles.button, {marginHorizontal: 20}]}
          />
          <ButtonwithIcon icon={<Apple />} containerStyle={styles.button} />
        </View>
      ) : (
        <View>
          {/* GOOGLE_BUTTON */}

          <TextButtonwithIcon
            label={'Continue with Google'}
            leftIcon={<GoogleLogo />}
            labelStyle={styles.googleButtonLabel}
            containerStyle={styles.googleButton}
          />
        </View>
      )}
      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TextButton
            label={'Sign up here'}
            labelStyle={styles.signInButtonLabel}
            onPress={() =>
              navigation.navigate(routes.SIGNUP, {key: route.params.key})
            }
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
    color: '#030F1C',
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold,
  },
  paragraph: {
    marginTop: 7,
    fontSize: 14,
    color: '#8D8D8D',
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Regular,
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
    fontFamily: FONTS.Nunito_Medium,
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
  socialMediaButtonContainer: {
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 8,
  },
  accountText: {
    color: '#8D8D8D',
    fontSize: 15,
    fontFamily: FONTS.Nunito_Light,
  },
  signInButtonLabel: {
    color: COLORS.primary,
    marginLeft: 7,
    fontFamily: FONTS.Nunito_Regular,
  },
  googleButtonLabel: {
    color: '#353535',
    marginLeft: 15,
    fontFamily: FONTS.Nunito_Light,
  },
});
