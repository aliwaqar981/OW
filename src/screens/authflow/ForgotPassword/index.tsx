import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Forgotpassword} from '../../../assets/images';
import {COLORS, FONTS} from '../../../themes';
import {Forminput, TextButton} from '../../../components';
import {Email} from '../../../assets/svgicons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/AuthStack';
type Props = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;

const ForgotPassword: React.FC<Props> = ({navigation, route}) => {
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
          onPress={() =>
            navigation.navigate('VerifyOTP', {key: route.params.key})
          }
          labelStyle={{fontSize: 15}}
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
    textAlign: 'center',
    fontFamily: FONTS.Nunito_SemiBold,
  },
  paragraph: {
    fontSize: 14,
    color: COLORS.black,
    marginHorizontal: 30,
    textAlign: 'center',
    marginTop: 4,
    fontFamily: FONTS.Nunito_Regular,
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
