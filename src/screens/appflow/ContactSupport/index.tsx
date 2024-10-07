import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS} from '../../../themes';
import FormInput from '../../../components/FormInput';
import {Email, User, User2} from '../../../assets/svgicons';
import {TextInput} from 'react-native';
import {TextButton} from '../../../components';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'ContactSupport'>;

const ContactSupport: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* NAME_INPUT_FIELDS */}
        <FormInput
          placeholder={'Name'}
          leftIcon={<User2 />}
          placeholderTextColor={'#292D32'}
          containerStyle={{borderColor: '#ECECEC'}}
        />
        {/* EMAIL_INPUT_FIELDS */}
        <FormInput
          placeholder={'Email'}
          leftIcon={<Email />}
          placeholderTextColor={'#292D32'}
          containerStyle={{borderColor: '#ECECEC', marginTop: 16}}
        />
        {/* MESSAGE_INPUT_FIELDS */}
        <View style={styles.messageInputContainer}>
          <TextInput
            placeholder="Message"
            placeholderTextColor={'#292D32'}
            style={{fontFamily: FONTS.Nunito_Regular}}
          />
        </View>
        {/* SUBMIT_BUTTON */}
        <TextButton label={'Submit'} containerStyle={styles.submitButton} />
        {/* PARAGRAPH */}
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Eget varius est posuere augue
          cursus suspendisse.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ContactSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  messageInputContainer: {
    height: 200,
    backgroundColor: '#F8F8F8',
    marginTop: 16,
    borderRadius: 8,
    padding: 10,
    borderColor: '#ECECEC',
    borderWidth: 1,
  },
  submitButton: {
    height: 55,
    backgroundColor: '#EB4E1F',
    marginTop: 53,
    borderRadius: 8,
  },
  paragraph: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 24,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Regular,
  },
});
