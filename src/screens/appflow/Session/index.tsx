import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Image5} from '../../../assets/images';
import {ButtonwithIcon, TextButton} from '../../../components';
import {Call2, GoogleVoice, StarList, Video3} from '../../../assets/svgicons';
import {COLORS, FONTS} from '../../../themes';
import Modal from 'react-native-modal';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../navigation/HomeStack';
type Props = NativeStackScreenProps<HomeStackParamList, 'Session'>;

const Session: React.FC<Props> = ({navigation}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const RenderModal = () => {
    return (
      <View>
        <Modal
          isVisible={isModalVisible}
          backdropOpacity={0.3}
          onBackdropPress={() => toggleModal()}>
          <View style={styles.modalContainer}>
            {/* TITLE */}
            <Text style={styles.modalTitle}>
              Your session has been completed!
            </Text>
            {/* PARAGRAPH */}
            <Text style={styles.paragrap}>Please rate your experience</Text>
            {/* STAR */}
            <View style={{marginTop: 25}}>
              <StarList />
            </View>
            {/* INPUT_FIELDS */}
            <TextInput
              placeholder="Write About Your Experience:"
              placeholderTextColor={'#BCBCBC'}
              style={styles.inputContainer}
            />
            {/* SUBMIT_BUTTON */}
            <TextButton
              label={'Submit'}
              containerStyle={styles.submitButton}
              onPress={() => {
                toggleModal();
                setTimeout(() => {
                  navigation.replace('BookingDetails', {
                    params: 'Requested Bookings',
                  });
                }, 1000);
              }}
            />
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={Image5} style={styles.imageContainer}>
        <View style={styles.innerContainer}>
          {/* CALL_TIMER */}
          <View style={styles.callTimer}>
            <Text style={{color: '#FF7D61'}}>{'\u2B24'}</Text>
            <Text style={styles.text}>00:30</Text>
          </View>
          {/* BUTTONS */}
          <View style={styles.buttonContainer}>
            <ButtonwithIcon icon={<GoogleVoice />} />
            <ButtonwithIcon icon={<Call2 />} onPress={toggleModal} />
            <ButtonwithIcon icon={<Video3 />} />
          </View>
        </View>
        {RenderModal()}
      </ImageBackground>
    </View>
  );
};

export default Session;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  callTimer: {
    width: 100,
    height: 40,
    backgroundColor: '#C8C8C820',
    alignSelf: 'center',
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40 / 2,
    flexDirection: 'row',
  },
  buttonContainer: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
    width: 250,
    borderRadius: 250 / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    marginLeft: 10,
    fontFamily: FONTS.Nunito_Regular,
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.Nunito_Bold,
  },
  paragrap: {
    fontSize: 11,
    color: '#263238',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: FONTS.Nunito_Regular,
  },
  inputContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#EB4E1F50',
    paddingHorizontal: 15,
    borderRadius: 8,
    width: '100%',
    backgroundColor: '#F9F9F9',
    marginTop: 20,
  },
  submitButton: {
    height: 48,
    backgroundColor: COLORS.red,
    width: '100%',
    marginTop: 35,
    borderRadius: 7,
  },
});
