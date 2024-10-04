import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../../themes';
import {TextButton, TextInputCmp} from '../../../components';
import {routes} from '../../../constants';

const ProfileVerificationStep5 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          {/* HEADING */}
          <Text style={styles.heading}>Complete My Profile</Text>
          {/* SKIP */}
          <TextButton
            label={'SKIP'}
            labelStyle={{color: COLORS.black, fontFamily: FONTS.Nunito_Regular}}
            containerStyle={styles.skip}
          />
        </View>
        {/* COUNTER */}
        <Text style={[styles.heading, {marginTop: 3}]}>5/7</Text>
        {/* TITLE */}
        <Text style={styles.title}>Add services you offer</Text>
        {/* DISCRIPTION */}
        <Text style={styles.discrption}>
          Let patient select what exactly they need
        </Text>
        <ScrollView style={{marginTop: 32}}>
          {/* TEXT_INPUT_FIELDS */}

          {/* SERVICES_NAME */}
          <TextInputCmp
            label={'Service Name'}
            placeholder={'Write here'}
            placeholderTextColor={'#606060'}
          />
          {/* CHOOSE_TIME */}
          <TextInputCmp
            label={'Session Time'}
            placeholder={'Select'}
            placeholderTextColor={'#606060'}
            containerStyle={{marginTop: 23}}
          />
          {/* PRICING */}
          <TextInputCmp
            label={'Pricing'}
            placeholder={'$00'}
            placeholderTextColor={'#606060'}
            containerStyle={{marginTop: 23}}
          />
          {/* DISCRIPTION */}
          <TextInputCmp
            label={'Description (optional)'}
            placeholder={'write about this session here'}
            placeholderTextColor={'#606060'}
            containerStyle={{marginTop: 23}}
            style={{height: 100, alignItems: 'flex-start', padding: 15}}
            multiline={true}
          />
          {/* ADD_BUTTONS */}
          <TextButton
            label={'Add'}
            containerStyle={styles.addButton}
            onPress={() => navigation.navigate(routes.PROFILEVERIFICATIONSTEP6)}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileVerificationStep5;

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
    backgroundColor: null,
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
  addButton: {
    height: 55,
    borderRadius: 8,
    backgroundColor: COLORS.red,
    width: '100%',
    marginTop: 40,
  },
});
