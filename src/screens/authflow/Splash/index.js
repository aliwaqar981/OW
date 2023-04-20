/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Logo} from '../../../assets/images';
import {COLORS} from '../../../themes';
import {TextButton} from '../../../components';
import {routes} from '../../../constants/routes';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO */}
      <View style={styles.logoContaner}>
        <Image source={Logo} style={{width: 280, height: 80}} />
      </View>
      <View style={styles.footer}>
        {/* TITLE */}
        <Text style={styles.title}>Continue as?</Text>
        {/* SUB_TITLE */}
        <Text style={styles.subTitle}>Select who you are</Text>
        <View style={{flexDirection: 'row', marginTop: 24}}>
          {/* THERAPIST */}
          <TouchableOpacity style={styles.therapistrd}>
            <Text style={styles.text}>Therapist</Text>
          </TouchableOpacity>
          {/* PATIENT */}
          <TouchableOpacity
            style={styles.patient}
            onPress={() => navigation.navigate(routes.LOGIN)}>
            <Text style={{...styles.text, marginTop: 30}}>Patient</Text>
            <TextButton
              label={'Client'}
              labelStyle={{fontSize: 13}}
              containerStyle={styles.cancleButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logoContaner: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#FEF4E8',
    flex: 0.35,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
    marginTop: 25,
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.black,
  },
  therapistrd: {
    borderRadius: 12,
    backgroundColor: '#D12A83',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 6,
  },
  patient: {
    borderRadius: 12,
    backgroundColor: '#EB4E1F',
    height: 120,
    alignItems: 'center',
    flex: 1,
    marginLeft: 6,
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '700',
  },
  cancleButton: {
    backgroundColor: '#FF6436',
    paddingHorizontal: 17,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 30,
  },
});
