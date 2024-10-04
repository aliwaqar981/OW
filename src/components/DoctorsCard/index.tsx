import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/images';
import {COLORS, FONTS} from '../../themes';
import TextButton from '../TextButton';

interface DoctorItem {
  image: ImageSourcePropType;
  name: string;
  speciality: string;
  recommendation?: boolean;
}

interface DoctorsCardProps {
  item: DoctorItem;
  containerStyle?: ViewStyle;
  onPress: () => void;
}

const DoctorsCard: React.FC<DoctorsCardProps> = ({
  item,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      {/* BACKGROUND_IMAGE */}
      <ImageBackground
        resizeMode="cover"
        source={item.image}
        style={styles.imageContainer}
        imageStyle={{borderRadius: 12}}>
        {/* RECOMMENDED */}
        {item.recommendation && (
          <View style={styles.recomdend}>
            <Image source={Logo} style={{width: 25, height: 15}} />
            <Text style={styles.text}>Recommended</Text>
          </View>
        )}
        {/* DOCTOR_ABOUT */}
        <View style={{flex: 1, justifyContent: 'flex-end', margin: 15}}>
          <View style={styles.drInfo}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.specialityText}>{item.speciality}</Text>
              </View>
            </View>
            <TextButton
              disabled
              label={'Book'}
              containerStyle={styles.bookButton}
              labelStyle={{fontSize: 12, lineHeight: 14}}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DoctorsCard;

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 330,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  recomdend: {
    borderWidth: 1,
    borderColor: COLORS.white,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    width: 130,
    margin: 15,
  },
  text: {
    fontSize: 11,
    color: '#E7E7E7',
    marginLeft: 6,
    fontFamily: FONTS.Nunito_Bold,
  },
  drInfo: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Nunito_ExtraBold,
  },
  specialityText: {
    fontSize: 14,
    color: '#4C4C4C',
    fontFamily: FONTS.Nunito_Light,
  },
  bookButton: {
    height: 32,
    backgroundColor: 'red',
    width: 80,
    borderRadius: 8,
  },
});
