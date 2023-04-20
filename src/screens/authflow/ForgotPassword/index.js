/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Forgotpassword} from '../../../assets/images';
import {COLORS} from '../../../themes';
import {Forminput, TextButton} from '../../../components';
import {Email} from '../../../assets/svgicons';
import {routes} from '../../../constants/routes';

const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* BACKGROUND_IMAGE */}
      <Image source={Forgotpassword} style={styles.image} />
      {/* TITLE */}
      <Text style={styles.title}>Forgot Password</Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>
        Enter your email or phone no. so that we can send you an OTP code to
        reset your password
      </Text>
      <View style={styles.footer}>
        {/* EMAI_INPUT_FEILDS */}

        <Forminput
          placeholder={'Email'}
          placeholderTextColor="#292D3260"
          leftIcon={<Email />}
          containerStyle={{marginTop: 12}}
        />
        {/* CONTINUE_BUTTON */}
        <TextButton
          label={'Continue'}
          containerStyle={styles.button}
          onPress={() => navigation.navigate(routes.VERIFYOTP)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    width: 300,
    height: 332,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.black,
    marginHorizontal: 30,
    textAlign: 'center',
    marginTop: 4,
  },
  footer: {
    marginHorizontal: 20,
    flex: 1,
    marginTop: 18,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 8,
    marginBottom: 40,
  },
});
