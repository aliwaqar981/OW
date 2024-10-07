import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {Platform} from 'react-native';
import {COLORS, FONTS} from '../../../themes';
import RNPickerSelect from 'react-native-picker-select';
import {Card, DropDown} from '../../../assets/svgicons';
import FormInput from '../../../components/FormInput';
import {TextButton} from '../../../components';
import {routes} from '../../../constants';
import Modal from 'react-native-modal';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'HomeCheckOut'>;

const HomeCheckOut: React.FC<Props> = ({navigation}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const rederViewCalendarModal = () => {
    return (
      <Modal isVisible={isModalVisible} style={{margin: 20}}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Great!! Your appointment has been made
          </Text>
          <TextButton
            label={'View My Calendar'}
            containerStyle={
              [styles.getStartedButton, {marginTop: 18}] as ViewStyle
            }
            onPress={() => {
              toggleModal();
              setTimeout(() => {
                navigation.navigate('Agenda');
              }, 500);
            }}
            labelStyle={{fontFamily: FONTS.Nunito_Regular}}
          />
        </View>
      </Modal>
    );
  };
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
              inputAndroid: {
                fontFamily: FONTS.Nunito_Regular,
              },
              inputIOS: {
                fontFamily: FONTS.Nunito_Regular,
              },
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
          label={'Pay & Book'}
          containerStyle={styles.getStartedButton}
          onPress={toggleModal}
        />
        {/* INFO */}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Eget varius est posuere augue
          cursus suspendisse.
        </Text>
      </View>
      {rederViewCalendarModal()}
    </View>
  );
};

export default HomeCheckOut;

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
    borderColor: '#E8E8E8',
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
    paddingTop: 73,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
    color: '#AAAAAA',
    textAlign: 'center',
    paddingTop: 30,
    fontFamily: FONTS.Nunito_Regular,
    marginHorizontal: 20,
  },
  getStartedButton: {
    height: 50,
    backgroundColor: COLORS.red,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 17,
    width: '100%',
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontFamily: FONTS.Nunito_Bold,
    color: COLORS.black,
  },
});
