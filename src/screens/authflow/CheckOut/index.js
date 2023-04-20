/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Platform} from 'react-native';
import {COLORS} from '../../../themes';
import RNPickerSelect from 'react-native-picker-select';
import {Card, DropDown, MasterCard} from '../../../assets/svgicons';
import FormInput from '../../../components/FormInput';
import {TextButton} from '../../../components';
import {AuthContext} from '../../../../App';
COLORS;
const CheckOut = () => {
  const {setUserId} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={{marginTop: 30, marginHorizontal: 20}}>
        {/* TITLE */}
        <Text style={styles.title}>Stripe</Text>
        {/* PICKER */}
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            placeholder={{}}
            onValueChange={value => console.log(value)}
            items={[
              {label: 'United State', value: 'United State'},
              {label: 'England', value: 'England'},
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
              inputAndroid: {},
              inputIOS: {},
            }}
          />
        </View>
        {/*  */}
        {/* CARD_NUMBER_INPUT_FEILDS */}
        <FormInput
          placeholder={'Card number'}
          placeholderTextColor={'#00000070'}
          leftIcon={<Card />}
          leftIconStyle={{marginRight: 10}}
          containerStyle={{marginTop: 20, borderColor: '#E8E8E8'}}
        />
        {/* CARD_NAME_INPUT_FIELDS */}
        <FormInput
          placeholder={'Card holder name'}
          containerStyle={styles.nameInputfieldContainer}
          placeholderTextColor={'#00000070'}
        />
        <View style={{flexDirection: 'row'}}>
          {/* CVC_INPUT_FEILDS */}
          <FormInput
            placeholder={'CVC/CVV'}
            containerStyle={styles.cvcInputfieldContainer}
            placeholderTextColor={'#00000070'}
          />
          {/*DATE_INPUT_FEILDS */}
          <FormInput
            placeholder={'MM/DD/YY'}
            containerStyle={styles.date}
            placeholderTextColor={'#00000070'}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TextButton
          label={'Lets Get Started'}
          containerStyle={{
            height: 50,
            backgroundColor: COLORS.red,
            borderRadius: 8,
          }}
          onPress={() => setUserId('uid')}
        />
        {/* INFO */}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Eget varius est posuere augue
          cursus suspendisse.
        </Text>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  pickerContainer: {
    backgroundColor: '#F9F9F9',
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: COLORS.black,
  },
  nameInputfieldContainer: {
    paddingLeft: 20,
    marginTop: 20,
    borderColor: '#E8E8E8',
  },
  cvcInputfieldContainer: {
    paddingLeft: 20,
    marginTop: 20,
    flex: 0.4,
    marginRight: 17,
    borderColor: '#E8E8E8',
  },
  date: {
    paddingLeft: 20,
    marginTop: 20,
    flex: 1,
    borderColor: '#E8E8E8',
  },
  footer: {
    flex: 1,
    marginTop: 73,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 20,
  },
});
