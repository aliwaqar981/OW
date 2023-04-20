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
import {COLORS} from '../../../themes';
import {Logo} from '../../../assets/images';
import RNPickerSelect from 'react-native-picker-select';
import {
  Call,
  DropDown,
  Email,
  Gender,
  GoogleLogo,
  Lock,
  User,
} from '../../../assets/svgicons';
import {Forminput, TextButton, TextButtonwithIcon} from '../../../components';
import {routes} from '../../../constants/routes';
const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO */}
      <Image source={Logo} style={styles.logo} />
      {/* TITLE */}
      <Text style={styles.title}>Sign Up</Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>Please enter your details. </Text>
      <ScrollView>
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
                },
                inputIOS: {
                  color: '#898B8E',
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
          containerStyle={styles.loginButton}
          onPress={() => navigation.navigate(routes.SUBSCRIBE)}
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
              Already have an account?
            </Text>
            <TextButton
              label={'Log In here'}
              labelStyle={{color: COLORS.primary, marginLeft: 7}}
              onPress={() => navigation.navigate(routes.LOGIN)}
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
    fontWeight: '700',
    color: '#030F1C',
    marginHorizontal: 20,
  },
  paragraph: {
    marginTop: 7,
    fontSize: 14,
    color: '#8D8D8D',
    marginHorizontal: 20,
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
    marginVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
