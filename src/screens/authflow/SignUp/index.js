/* eslint-disable eqeqeq */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {Logo} from '../../../assets/images';
import RNPickerSelect from 'react-native-picker-select';
import {
  Apple,
  Call,
  DropDown,
  Email,
  Facebook,
  FB,
  Gender,
  GoogleLogo,
  Lock,
  User,
} from '../../../assets/svgicons';
import {
  ButtonwithIcon,
  Forminput,
  TextButton,
  TextButtonwithIcon,
} from '../../../components';
import {routes} from '../../../constants/routes';
const SignUp = ({navigation, route}) => {
  // console.log('______)_)__', route.params.key);
  const onSignUpPress = () => {
    route.params.key == 'therapist'
      ? navigation.navigate(routes.WELCOME)
      : navigation.navigate(routes.SUBSCRIBE);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO */}
      <Image source={Logo} style={styles.logo} />
      {/* TITLE */}
      <Text style={styles.title}>Sign Up</Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>Please enter your details. </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* INPUT_FIELDS */}
        <View style={{marginHorizontal: 20, marginTop: 24}}>
          {/* NAME_INPUT_FEILDS */}
          <Forminput
            placeholder={'Name'}
            placeholderTextColor="#292D3260"
            leftIcon={<User />}
            containerStyle={{marginTop: 12}}
          />
          {/* EMAIL_INPUT_FEILDS */}
          <Forminput
            placeholder={'Email'}
            placeholderTextColor="#292D3260"
            leftIcon={<Email />}
            containerStyle={{marginTop: 12}}
          />
          {/* PHONE_NUMBER_INPUT_FEILDS */}
          <Forminput
            placeholder={'Phone Number'}
            placeholderTextColor="#292D3260"
            leftIcon={<Call />}
            containerStyle={{marginTop: 12}}
          />
          <View style={styles.pickerContainer}>
            <View style={{position: 'absolute', left: 10}}>
              <Gender />
            </View>
            <RNPickerSelect
              placeholder={{
                label: 'Gender',
                value: null,
                color: '#898B8E',
              }}
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Male', value: 'Male'},
                {label: 'Female', value: 'Female'},
              ]}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <DropDown />;
              }}
              style={{
                iconContainer: {
                  top: Platform.OS === 'ios' ? 5 : 22,
                  right: 0,
                },
                inputAndroid: {
                  color: '#898B8E',
                  fontFamily: FONTS.Nunito_SemiBold,
                },
                inputIOS: {
                  color: '#898B8E',
                  fontFamily: FONTS.Nunito_SemiBold,
                },
              }}
            />
          </View>
          {/* PASSWORD_INPUT_FEILDS */}
          <Forminput
            placeholder={'Create Password'}
            placeholderTextColor="#292D3260"
            leftIcon={<Lock />}
            containerStyle={{marginTop: 12}}
          />
        </View>

        {/* SIGN_UP_BUTTON */}
        <TextButton
          label={'Sign Up'}
          labelStyle={{color: COLORS.white}}
          containerStyle={styles.signUpButton}
          onPress={onSignUpPress}
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
            <Text style={styles.accountText}>Already have an account? </Text>
            <TextButton
              label={'Log In here'}
              labelStyle={styles.signUpButtonLabel}
              onPress={() =>
                navigation.navigate(routes.LOGIN, {key: route.params.key})
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

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
    marginHorizontal: 20,
    fontFamily: FONTS.Nunito_Bold,
  },
  paragraph: {
    marginTop: 7,
    fontSize: 14,
    color: '#8D8D8D',
    marginHorizontal: 20,
    fontFamily: FONTS.Nunito_Regular,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
    fontSize: 14,
    marginRight: 20,
  },
  pickerContainer: {
    backgroundColor: '#F9F9F9',
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginTop: 12,
    paddingLeft: 50,
    paddingRight: 20,
  },
  signUpButton: {
    height: 52,
    backgroundColor: COLORS.primary,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 38,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 17,
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
    fontFamily: FONTS.Nunito_Regular,
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
    marginVertical: 30,
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
  googleButtonLabel: {
    color: '#353535',
    marginLeft: 15,
    fontFamily: FONTS.Nunito_Light,
  },
  accountText: {
    color: '#8D8D8D',
    fontSize: 15,
    fontFamily: FONTS.Nunito_Light,
  },
  signUpButtonLabel: {
    color: COLORS.primary,
    marginLeft: 7,
    fontFamily: FONTS.Nunito_SemiBold,
  },
});
