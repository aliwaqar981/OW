import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CreatPassword} from '../../../assets/images';
import {COLORS, FONTS} from '../../../themes';
import {Forminput, TextButton} from '../../../components';
import {Eye, Lock} from '../../../assets/svgicons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/AuthStack';
type Props = NativeStackScreenProps<AuthStackParamList, 'CreatePassword'>;

const CreatePassword: React.FC<Props> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* BACKGROUND_IMAGE */}
      <Image source={CreatPassword} style={styles.image} />
      <ScrollView>
        {/* TITLE */}
        <Text style={styles.title}>Reset Password</Text>
        {/* PARAGRAPH */}
        <Text style={styles.paragraph}>
          Enter your new password try not to forget again
        </Text>
        {/* FOOTER */}
        <View style={styles.footer}>
          {/* PASSWORD_INPUT_FEILDS */}
          <Forminput
            placeholder={'Password'}
            placeholderTextColor="#292D3260"
            leftIcon={<Lock />}
            righIcon={<Eye />}
          />
          {/* PASSWORD_INPUT_FEILDS */}
          <Forminput
            placeholder={'Confirm Password'}
            placeholderTextColor="#292D3260"
            leftIcon={<Lock />}
            righIcon={<Eye />}
            containerStyle={{marginTop: 14}}
          />
          <TextButton
            label={'Reset Password'}
            labelStyle={{color: COLORS.white, fontSize: 16}}
            containerStyle={styles.button}
            onPress={() =>
              navigation.navigate('Login', {key: route.params.key})
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePassword;

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
    marginHorizontal: 50,
    textAlign: 'center',
    marginTop: 4,
    fontFamily: FONTS.Nunito_Regular,
  },
  footer: {
    flex: 1,
    paddingVertical: 41,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  button: {
    height: 52,
    backgroundColor: COLORS.primary,
    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
  },
});
