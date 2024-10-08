import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../themes';
import TextButtonwithIcon from '../TextButtonwithIcon';
import {NotoStar} from '../../assets/svgicons';
import TextButton from '../TextButton';

// Define the type for the item prop
interface DoctorItem {
  image: ImageSourcePropType;
  name: string;
  speciality: string;
  experience: string;
}

// Define the props interface for DoctorsCard1
interface DoctorsCard1Props {
  item: DoctorItem;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

const DoctorsCard1: React.FC<DoctorsCard1Props> = ({
  item,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image source={item.image} style={styles.imageContainer} />
      <View style={styles.innerContainer}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>{item.name}</Text>
            <TextButtonwithIcon
              leftIcon={<NotoStar width={15} height={15} />}
              label={'5.6'}
              labelStyle={{marginLeft: 3}}
            />
          </View>
          <Text style={styles.text}>{item.speciality}</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.experinceText}>{item.experience}</Text>
          <TextButton
            disabled
            label={'Book '}
            containerStyle={styles.bookButton}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorsCard1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 9,
    flexDirection: 'row',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    color: '#454545',
    marginTop: 3,
    fontFamily: FONTS.Nunito_Light,
  },
  innerContainer: {
    flex: 1,
    marginLeft: 10,
    marginVertical: 6,
    justifyContent: 'space-between',
  },
  bookButton: {
    height: 32,
    backgroundColor: 'red',
    width: 80,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  experinceText: {
    fontSize: 10,
    color: '#454545',
    fontFamily: FONTS.Nunito_Regular,
  },
  name: {
    fontSize: 16,
    color: '#1B1B1B',
    fontFamily: FONTS.Nunito_SemiBold,
  },
});
