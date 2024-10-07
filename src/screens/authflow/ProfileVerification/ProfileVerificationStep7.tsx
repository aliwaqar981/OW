import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {ButtonwithIcon, TextButton} from '../../../components';
import {Camera} from '../../../assets/svgicons';
import {useUser} from '../../../Hooks/UseContext';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/AuthStack';
type Props = NativeStackScreenProps<
  AuthStackParamList,
  'ProfileVerificationStep7'
>;

const ProfileVerificationStep7: React.FC<Props> = () => {
  const {setIsProfessional} = useUser();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          {/* HEADING */}
          <Text style={styles.heading}>Complete My Profile</Text>
          {/* SKIP */}
          <TextButton
            label={'SKIP'}
            labelStyle={{color: COLORS.black}}
            containerStyle={styles.skip}
          />
        </View>
        {/* COUNTER */}
        <Text style={[styles.heading, {marginTop: 3}]}>7/7</Text>
        {/* TITLE */}
        <Text style={styles.title}>Eligibility Confirmation</Text>
        {/* DISCRIPTION */}
        <Text style={styles.discrption}>Add your degree and licenses </Text>
        {/* UPLOAD_YOUR_DEGREE */}
        <View style={{marginTop: 18}}>
          <Text style={styles.label}>Upload your Degree</Text>
          <Text style={styles.text}>Info will be added here</Text>
          <View style={styles.imageContainer}>
            <ButtonwithIcon icon={<Camera />} />
          </View>
        </View>
        {/* UPLOAD_YOUR_LICENCES */}
        <View style={{marginTop: 30}}>
          <Text style={styles.label}>Upload your License</Text>
          <Text style={styles.text}>Info will be added here</Text>
          <View style={styles.imageContainer}>
            <ButtonwithIcon icon={<Camera />} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          {/* SUBMIT_BUTTON */}
          <TextButton
            label={'Next'}
            containerStyle={styles.submitButton}
            onPress={() => setIsProfessional('uid')}
          />
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Eget varius est posuere
            augue cursus suspendisse. s
          </Text>
        </View>
        <View style={styles.skipContainer}>
          <Text style={styles.skipText}>Can i skip?</Text>
          <Text style={[styles.paragraph, {marginTop: 0}]}>
            Lorem ipsum dolor sit amet consectetur. Nec morbi sed nunc lorem
            enim nam enim adipiscing est. Enim est nisi velit proin vel amet
            aliquam. Sit in cras duis sit nulla nulla nunc.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileVerificationStep7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 16,
    color: COLORS.red,
    fontFamily: FONTS.Nunito_Bold,
  },
  skip: {
    backgroundColor: undefined,
    width: 40,
  },
  title: {
    fontSize: 24,
    color: '#030F1C',
    marginTop: 22,
    fontFamily: FONTS.Nunito_Bold,
  },
  discrption: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  label: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Regular,
  },
  text: {
    fontSize: 10,
    color: '#8A8A8A',
    marginTop: 3,
    fontFamily: FONTS.Nunito_Regular,
  },
  imageContainer: {
    backgroundColor: '#F9F9F9',
    marginTop: 10,
    paddingVertical: 22,
  },
  submitButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: COLORS.red,
    width: '100%',
    marginTop: 40,
  },
  paragraph: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 16,
    fontFamily: FONTS.Nunito_Regular,
  },
  footer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 22,
  },
  skipContainer: {
    backgroundColor: '#F9F9F9',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  skipText: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_Bold,
  },
});
