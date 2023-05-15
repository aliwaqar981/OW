/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {OTP} from '../../../assets/images';
import {COLORS, FONTS} from '../../../themes';
import {TextButton} from '../../../components';
import {routes} from '../../../constants/routes';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const VerifyOTP = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* BACKGROUND_IMAGE */}
      <Image source={OTP} style={styles.image} />
      {/* TITLE */}
      <Text style={styles.title}>OTP VERIFICATION</Text>
      {/* PARAGRAPH */}
      <Text style={styles.paragraph}>
        Enter otp sent to your email for the verification process.
      </Text>
      <View style={styles.footer}>
        {/* EMAI_INPUT_FEILDS */}

        <OTPInputView
          pinCount={4}
          style={styles.btnCotainer}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          // codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
          placeholderCharacter="0"
          selectionColor={COLORS.white}
          placeholderTextColor="#898B8E"
        />
        <View>
          {/* CONTINUE_BUTTON */}
          <TextButton
            label={'Submit'}
            containerStyle={styles.button}
            onPress={() =>
              navigation.navigate(routes.CREATEPASSWORD, {
                key: route.params.key,
              })
            }
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={styles.codeText}>Don’t receive code?</Text>
            <TextButton label={'Re-send'} labelStyle={styles.resendBtnText} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTP;

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
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.black,
    paddingHorizontal: 50,
    textAlign: 'center',
    marginTop: 4,
    fontFamily: FONTS.Nunito_Regular,
  },
  footer: {
    marginHorizontal: 20,
    flex: 1,
    marginTop: 18,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 8,
    marginBottom: 16,
  },
  underlineStyleBase: {
    width: 65,
    height: 52,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F9F9F9',
  },
  btnCotainer: {
    height: 52,
    marginTop: 20,
  },
  codeText: {
    color: '#8D8D8D',
    fontSize: 15,
    fontFamily: FONTS.Nunito_Regular,
  },
  resendBtnText: {
    color: COLORS.primary,
    marginLeft: 7,
    fontFamily: FONTS.Nunito_Bold,
  },
});
