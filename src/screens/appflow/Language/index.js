/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../themes';
import {LanguageCard} from '../../../components';
import {
  ActiveRadio,
  Circle,
  CircleFilled,
  InActiveRadio,
  SPAINISHflag,
  USAflag,
} from '../../../assets/svgicons';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>Language In Use</Text>

      {/* SUB_TITLE */}
      <Text style={styles.subTitle}>English</Text>

      {/* PARAGRAPH */}
      <Text style={[styles.title, {fontSize: 15, marginTop: 36}]}>
        Want to change? Select here
      </Text>

      {/* LANGUAGE_CARD */}
      <View style={{marginTop: 14}}>
        <LanguageCard
          flag={<USAflag />}
          language={'English'}
          icon={
            selectedLanguage == 'English' ? <ActiveRadio /> : <InActiveRadio />
          }
          onPress={() => setSelectedLanguage('English')}
        />

        <LanguageCard
          flag={<SPAINISHflag />}
          language={'Spanish'}
          icon={
            selectedLanguage == 'Spanish' ? <ActiveRadio /> : <InActiveRadio />
          }
          onPress={() => setSelectedLanguage('Spanish')}
        />
      </View>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 12,
    color: '#292D32',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: '#292D32',
    fontWeight: '500',
    marginTop: 10,
  },
});
